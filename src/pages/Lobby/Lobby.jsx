import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import { responseData } from 'recoil/atoms/lobbyState';
import SearchRoom from './SearchRoom/SearchRoom';
import RoomList from './RoomList/RoomList';
import gameAPI from 'apis/gameAPI';

function Lobby() {
  const [res, setRes] = useRecoilState(responseData);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await gameAPI.getRoomList();
      setRes(data);
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
