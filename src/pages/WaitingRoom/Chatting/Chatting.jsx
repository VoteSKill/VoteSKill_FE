import React, { useEffect, useRef, useState } from 'react';
import * as S from 'pages/WaitingRoom/Chatting/Chatting.style';
function Chatting({ messageList, sendMessage }) {
  const [inputMessage, setInputMessage] = useState({ message: '', nickname: 'testnickname' });
  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  const handleInputMessage = (e) => {
    setInputMessage({ ...inputMessage, message: e.target.value });
  };

  const sendChatting = () => {
    sendMessage(inputMessage);
    setInputMessage({ ...inputMessage, message: '' });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendChatting(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <S.Chat>
      <S.ChattingContainer>
        {messageList.map((msg, idx) => (
          <S.ChattingDivider key={idx} $mymessage={msg.nickname == 'test3'}>
            <S.MessageBox $mymessage={msg.nickname == 'test3'}>{msg.message}</S.MessageBox>
          </S.ChattingDivider>
        ))}
        <div ref={messageEndRef}></div>
      </S.ChattingContainer>
      <S.BottomBar>
        <S.InputBar
          placeholder="메세지를 입력하세요"
          onChange={handleInputMessage}
          value={inputMessage.message}
          onKeyDown={handleOnKeyPress}
        />
        <S.SendButton onClick={sendChatting}>입력</S.SendButton>
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chatting;
