import React from 'react';
import * as S from 'pages/WaitingRoom/Chatting/Chatting.style';

function Chatting() {
  return (
    <S.Chat>
      <S.SendContainer></S.SendContainer>
      <S.BottomBar>
        <S.InputBar></S.InputBar>
        <S.SendButton>입력</S.SendButton>``
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chatting;
