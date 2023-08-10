import React, { useEffect } from 'react';
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
  } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    const password = location.state.password;
    setRoomId(sessionId);
    setUserName(nickname);
    setPassword(password);

    joinSession();
  }, [sessionId]);


    setPublisherSetting({ ...publisherSetting, publishAudio: true, publishVideo: true });
    joinSession();
  }, [sessionId]);

  console.log(sessionId);

  return (
    <Layout>
      <Header />
      {session ? (
        <S.Total>
          <PlayerList />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : null}
    </Layout>
  );
}

export default WaitingRoom;
