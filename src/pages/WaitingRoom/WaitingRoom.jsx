import React, { useEffect, useMemo } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';
import { useLocation, useParams } from 'react-router';
import gameAPI from 'apis/gameAPI';

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
    joinSession,
    setPassword,
    publisherSetting,
    setPublisherSetting,
    leaveSession,
  } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    const password = location.state.password;
    setRoomId(sessionId);
    setUserName(nickname);
    setPassword(password);
    setPublisherSetting({ ...publisherSetting, publishAudio: false, publishVideo: false });

    joinSession();
  }, [sessionId]);

  useEffect(() => {
    const handleBeforeUnload = () => leaveSession();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [leaveSession]);

  return (
    <Layout>
      <Header />
      {session && subscribers ? (
        <S.Total>
          <PlayerList subscribers={subscribers} />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : (
        <h1>로딩중</h1>
      )}
    </Layout>
  );
}

export default WaitingRoom;
