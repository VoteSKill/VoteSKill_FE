import React from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';

function WaitingRoom() {
  return (
    <Layout>
      <Header />
      <S.Total>
        <PlayerList />
        <Chatting />
      </S.Total>
    </Layout>
  );
}

export default WaitingRoom;
