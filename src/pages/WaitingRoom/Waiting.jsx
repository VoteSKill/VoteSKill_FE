import React, { useState } from 'react';
import * as S from 'pages/WaitingRoom/Waiting.Style';
import Chat from './Chat';
import IdList from './IdList';

function Waiting() {
  return (
    <S.Total>
      <IdList />
      <Chat />
    </S.Total>
  );
}

export default Waiting;
