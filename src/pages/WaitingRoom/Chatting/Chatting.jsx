import React from 'react';
import * as S from 'pages/WaitingRoom/Chatting/Chatting.style';
function Chatting() {
  const dummyMessages = [
    {
      nickname: 'test1',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, deserunt iusto! Veritatis expedita velit illo cumque officia neque inventore totam corrupti molestiae laborum beatae, et veniam quam error voluptates a!',
    },
    {
      nickname: 'test2',
      message: 'message2',
    },
    {
      nickname: 'test3',
      message: 'message3',
    },
    {
      nickname: 'test4',
      message: 'message4',
    },
  ];

  return (
    <S.Chat>
      <S.ChattingContainer>
        {dummyMessages.map((msg) => (
          <S.ChattingDivider key={msg.nickname} myMessage={msg.nickname == 'test3'}>
            <S.MessageBox myMessage={msg.nickname == 'test3'}>{msg.message}</S.MessageBox>
          </S.ChattingDivider>
        ))}
      </S.ChattingContainer>
      <S.BottomBar>
        <S.InputBar placeholder="메세지를 입력하세요" />
        <S.SendButton>입력</S.SendButton>
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chatting;
