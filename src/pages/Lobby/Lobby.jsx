import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import { roomListState } from 'recoil/atoms/lobbyState';
import SearchRoom from './SearchRoom/SearchRoom';
import RoomList from './RoomList/RoomList';
import gameAPI from 'apis/gameAPI';

function Lobby() {
  const [roomList, setRoomList] = useRecoilState(roomListState);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await gameAPI.getRoomList();
      setRoomList(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Header />
      <S.Container>
        <S.Center>
          {/* <SearchRoom /> */}
          <RoomList />
        </S.Center>
        <MakeRoom />
      </S.Container>
    </Layout>
  );
}

export default Lobby;
