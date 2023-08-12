import { useEffect, useState } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import { useNavigate, useParams } from 'react-router-dom';

function PlayerList({ subscribers, publisher }) {
  const sessionId = useParams();
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const { openModal: openUserInfo } = useModal('UserInfo');

  useEffect(() => {
    setUserList(subscribers);
  }, [subscribers]);

  const gameStart = () => {
    navigate(`/game/${sessionId.sessionId}`, {
      state: { sessionId: sessionId.sessionId },
    });
  };

  return (
    <S.PlayerListWrapper>
      <S.Square>
        <S.Container key={publisher}>
          <span onClick={openUserInfo}>{JSON.parse(publisher.stream.connection.data).clientData}</span>
        </S.Container>
        {userList.map((sub, idx) => (
          <S.Container key={idx}>
            <span onClick={openUserInfo}>{JSON.parse(sub.stream.connection.data).clientData}</span>
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton>EXIT</S.OutButton>
        <S.StartButton onClick={gameStart}>START</S.StartButton>
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
