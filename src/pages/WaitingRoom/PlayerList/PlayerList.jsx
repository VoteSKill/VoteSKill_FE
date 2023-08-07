import React, { useState, useEffect } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import UserInfo from 'components/userinfo/UserInfo';
import axios from 'axios';
import SearchMakeRoom from 'pages/Lobby/SearchMakeRoom/SearchMakeRoom';
function PlayerList() {
  // 유저네임받아와야함
  // const [myName, setmyName] = useState('');
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호'];
  // 인덱스를 먼저 찾아,, 그리고 인덱스에 해당하는 유저 정보 가져올 수 있도록
  const Master = '병국';
  const RoomId = 1;
  const [userIdx, setUserIdx] = useState(Items);
  const [currentUsername, setcurrentUsername] = useState(Master);

  const { openModal: openUserInfo } = useModal('UserInfo');

  // 강퇴 버튼
  const removeItem = (item) => {
    // console.log(`${item} 삭제`);
    // if (Master === '병국') {
    //   axios
    //   .delete(`http://localhost:8000/room/${item.name}/${item}`, {data: { username: item }})
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const newuserIdx = userIdx.filter((data) => {
      console.log(data);
      return data !== item;
    });
    setUserIdx(newuserIdx);
  };
  // 나가기 버튼
  const roomOut = () => {
    // axios.delete(`http://localhost:8080/room/${myName}`, {
    //   data: {
    //     username: myName,
    //   },
    // }
    // );
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
        <S.StartButton onClick={gameStart}>START</S.StartButton>
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
