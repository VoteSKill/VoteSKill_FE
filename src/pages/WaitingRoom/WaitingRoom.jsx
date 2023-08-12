import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';
import { useLocation, useParams } from 'react-router';
import useEventSource from 'hooks/useEventsource';
import axios from 'axios';

function WaitingRoom() {
  const { sessionId } = useParams();
  const location = useLocation();
  const nickname = sessionStorage.getItem('nickname');
  const roleData = useEventSource('role', sessionId, nickname);

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

  const getServerSentEvent = async () => {
    const URL = process.env.REACT_APP_GAME_SERVER_URL + `/sse/enter/${sessionId}/${nickname}`;
    const res = await axios.get(URL);
  };

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
    setPublisherSetting({ ...publisherSetting, publishAudio: true, publishVideo: true });
    joinSession();
  }, [sessionId]);

  useEffect(() => {
    getServerSentEvent();
  }, []);

  return (
    <Layout>
      <Header />
      {session && subscribers && publisher ? (
        <S.Total>
          <PlayerList publisher={publisher} subscribers={subscribers} roleData={roleData} />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : (
        <h1>로딩중</h1>
      )}
    </Layout>
  );
}

export default WaitingRoom;
