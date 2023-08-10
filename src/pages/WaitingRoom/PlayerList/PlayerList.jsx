import React, { useState, useEffect } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import UserInfo from 'components/userinfo/UserInfo';
import axios from 'axios';
import RoomList from 'pages/Lobby/RoomList/RoomList';
import { useNavigate, useParams } from 'react-router-dom';

function PlayerList() {
  const [myName, setmyName] = useState('');
  const sessionId = useParams();
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호'];
  const Master = '병국';
  const [userIdx, setUserIdx] = useState(Items);
  const [currentUsername, setcurrentUsername] = useState(Master);

  const { openModal: openUserInfo } = useModal('UserInfo');
  const navigate = useNavigate();

  // 강퇴 버튼
  const removeItem = (item) => {
    console.log(sessionId);
    axios
      .delete(`http://localhost:8000/rooms/${sessionId}/${item}`, { data: { username: item } })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    const newuserIdx = userIdx.filter((data) => {
      console.log(data);
      return data !== item;
    });
    setUserIdx(newuserIdx);
  };
  // 나가기 버튼
  const roomOut = () => {
    axios.delete(`http://localhost:8080/rooms/${sessionId}`, {
      data: {
        username: myName,
      },
    });
  };

  // 게임시작 버튼
  const gameStart = () => {
    // axios
    //   .post(`http://localhost:8080/room/${roomId}/start`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // 게임방 이동
    console.log(sessionId.sessionId);
    navigate(`/game/${sessionId.sessionId}`, {
      state: { sessionId: sessionId.sessionId },
    });
    // 모달 보임
    //return <JobAssign/>;
  };
  return (
    <S.PlayerListWrapper>
      <S.Square>
        {userIdx.map((item, index) => (
          <S.Container key={index + 1}>
            {/* () => openModal(userIdx[index]) */}
            <span onClick={openUserInfo}>{item}</span>
            {item === Master && <S.Logo src={process.env.PUBLIC_URL + '/crown.png'} />}
            {currentUsername == Master && item !== Master && (
              <S.DropButton onClick={() => removeItem(item)}>강퇴</S.DropButton>
            )}
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton onClick={roomOut}>EXIT</S.OutButton>
        {currentUsername === Master && <S.StartButton onClick={gameStart}>START</S.StartButton>}
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
