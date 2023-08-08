import React, { useState, useEffect } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import { getRoomList } from 'recoil/atoms/lobbyState';
import SearchRoom from './SearchRoom/SearchRoom';
import RoomList from './RoomList/RoomList';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
function Lobby() {
  useEffect(() => {
    getRoomList();
    const fetchData = async () => {
      const response = await gameAPI.getRoomList();
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <React.StrictMode>
      <Layout>
        <Header />
        <S.Container>
          <S.Center>
            <SearchRoom />
            <RoomList />
          </S.Center>
          <MakeRoom />
        </S.Container>
      </Layout>
    </React.StrictMode>
  );
}

export default Lobby;
