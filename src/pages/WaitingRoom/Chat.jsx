import React, { useState } from 'react';
import * as S from 'pages/WaitingRoom/Waiting.Style';

function Chat() {
  return (
    <S.Chat>
      <S.SendContainer></S.SendContainer>
      <S.BottomBar>
        <S.InputBar></S.InputBar>
        <S.SendButton>입력</S.SendButton>
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chat;
