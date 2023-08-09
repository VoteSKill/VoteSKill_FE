import { useRecoilState } from 'recoil';
import React, { useState, useEffect } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import { getRoomList, responseData } from 'recoil/atoms/lobbyState';
import SearchRoom from './SearchRoom/SearchRoom';
import RoomList from './RoomList/RoomList';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';

function Lobby() {
  const [res, setRes] = useRecoilState(responseData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await gameAPI.getRoomList();
      console.log(response.data, 'data');
      setRes(response.data);
    };
    fetchData();
  }, []);
  return (
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
  );
}

export default Lobby;
