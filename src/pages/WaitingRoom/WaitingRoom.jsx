import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';
import { useLocation, useParams } from 'react-router';

function WaitingRoom() {
  const { sessionId } = useParams();
  const location = useLocation();
  const {
    session,
    messageList,
    subscribers,
    sendMessage,
    setRoomId,
    setUserName,
    setPassword,
    joinSession,
    publisher,
    publisherSetting,
    setPublisherSetting,
  } = useOpenVidu();

  useEffect(() => {
    if (session) {
      console.log('이미 세션이 존재합니다.');
      return;
    }
    const nickname = sessionStorage.getItem('nickname');
    const password = location.state.password;
    setRoomId(sessionId);
    setUserName(nickname);
    setPassword(password);
    setPublisherSetting({ ...publisherSetting, publishAudio: false, publishVideo: false });

    joinSession();
  }, [sessionId]);

  return (
    <Layout>
      <Header />
      {session && subscribers && publisher ? (
        <S.Total>
          <PlayerList publisher={publisher} subscribers={subscribers} />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : (
        <h1>로딩중</h1>
      )}
    </Layout>
  );
}

export default WaitingRoom;
