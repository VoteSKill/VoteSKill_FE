import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';
import { useParams } from 'react-router';

function WaitingRoom() {
  const { session, mainStreamManager, messageList, subscribers, sendMessage, setRoomId, setUserName, joinSession } =
    useOpenVidu();
  const { sessionId } = useParams();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    setRoomId(sessionId);
    setUserName(nickname);
    joinSession();
  }, [sessionId]);

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
