import React, { useState } from 'react';
import * as S from 'pages/WaitingRoom/Waiting.Style';

function IdList() {
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호', '아무개', '유유'];

  return (
    <S.Square>
      {Items.map((item) => (
        <S.Container
          key={item}
          style={{
            margin: '10px',
            backgroundColor: 'white',
            border: '10px solid black',
            borderRadius: '30px',
            textalign: 'center',
          }}
        >
          <br />
          {item}
          <S.OutButton>강퇴</S.OutButton>
        </S.Container>
      ))}
    </S.Square>
  );
}

export default IdList;
