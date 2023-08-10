import * as S from 'components/makeroommodal/MakeRoomModal.Style';
import { getRoomList, responseData } from 'recoil/atoms/lobbyState';

import { useState } from 'react';
import { Switch } from '@mui/material';
import gameAPI from 'apis/gameAPI';
import useInput from 'hooks/useInput';
import { useNavigate } from 'react-router';
import { constSelector, useSetRecoilState, useRecoilValue } from 'recoil';

function MakeRoomModal() {
  const NameCheck = useRecoilValue(responseData);

  const [customSessionId, setCustomSessionId, customSessionIdHandler] = useInput('');
  const [password, setPassword, passwordHandler] = useInput('');
  const [boxChecked, setboxChecked] = useState(false);

  const navigate = useNavigate();

  const makeRoomPost = async () => {
    const requestData = {
      customSessionId,
      password,
      admitNumber: 6,
    };


    try {
      const { data } = await gameAPI.setRoom(requestData);
      enterWaitingRoom(requestData.customSessionId);

    } catch (e) {
      console.log(e);
      alert('게임방 생성에 실패했습니다. 다시 신청해주세요.');
    }

  };

  const enterWaitingRoom = async (sessionId) => {
    navigate(`/waitingroom/${sessionId}`, {
      state: {
        password,
      },
    });
  };

  const handleBoxChecked = () => {
    if (boxChecked) {
      setboxChecked(false);
      setPassword('');
    } else {
      setboxChecked(true);
    }
  };

  return (
    <S.RoomMakeBackground>
      <S.RoomDiv>
        <S.InputLabel>방 이름</S.InputLabel>
        <S.InputBar type="text" onChange={customSessionIdHandler} placeholder="방 이름을 입력하세요"></S.InputBar>
      </S.RoomDiv>
      <S.RoomDiv>
        <S.InputLabel>
          비밀번호
          <Switch checked={boxChecked} onChange={handleBoxChecked} color="error" disableRipple={true} />
        </S.InputLabel>
        <S.InputBar
          value={password}
          disabled={!boxChecked}
          type="password"
          onChange={passwordHandler}
          placeholder="비밀번호를 입력하세요"
        ></S.InputBar>
      </S.RoomDiv>
      <S.RoomCreateButton onClick={makeRoomPost}>방 생성 </S.RoomCreateButton>
    </S.RoomMakeBackground>
  );
}

export default MakeRoomModal;
