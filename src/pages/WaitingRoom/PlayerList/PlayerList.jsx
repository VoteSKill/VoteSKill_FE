import React, { useState, useEffect } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import axios from 'axios';
function PlayerList() {
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호'];
  // 인덱스를 먼저 찾아,, 그리고 인덱스에 해당하는 유저 정보 가져올 수 있도록
  const Master = '병국';
  const RoomId = 1;
  const [userIdx, setUserIdx] = useState(Items);
  const [currentUsername, setcurrentUsername] = useState(Master);

  useEffect(() => {
    console.log(userIdx);
  });
  const { openModal } = useModal();
  const [myName, setmyName] = useState('');

  // 강퇴 버튼
  const removeItem = (item) => {
    console.log(Master, '마스터');
    console.log(currentUsername, '현재유저');

    // console.log(`${item} 삭제`);
    if (Master === '병국') {
      const newuserIdx = userIdx.filter((data) => {
        console.log(data);
        return data !== item;
      });
      setUserIdx(newuserIdx);
    }
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
    <S.Total>
      <S.Square>
        {userIdx.map((item, index) => (
          <S.Container
            key={index + 1}
            style={{
              margin: '10px',
              backgroundColor: 'white',
              border: '8px solid black',
              borderRadius: '30px',
              textalign: 'center',
            }}
          >
            <div style={{ marginTop: '1rem' }} onClick={() => openModal(userIdx[index])}>
              {item}
            </div>
            {currentUsername == Master && item !== Master && (
              <S.DropButton onClick={() => removeItem(item)}>강퇴</S.DropButton>
            )}
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton onClick={roomOut}>
          <S.Logo src={process.env.PUBLIC_URL + '/exit.png'} />
        </S.OutButton>
        <S.StartButton onClick={gameStart}>START</S.StartButton>
      </S.ButtonSquare>
    </S.Total>
  );
}

export default PlayerList;
