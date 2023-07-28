import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useDayChange from 'hooks/useDayChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
// 낮이면 -> background change
// 밤이면  -> theme : night
function GameRoom() {
  const { setDay, setNight } = useDayChange();

  const handleSetNight = () => {
    setNight();
  };

  const handleSetDay = () => {
    setDay();
  };

  // setDay() -> 처음실행 / 그 다음부터 4분주기
  // setNight() -> 3분후 실행 / 그다음부터 4분주기

  const camScreenData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  return (
    <Layout isMain={false} $isNight={setDay()}>
      <Header />
      <S.ScreenWrapper>
        {camScreenData.map((item2) => (
          <S.PreVideoArea key={item2.id}>
            <CamScreen />
          </S.PreVideoArea>
        ))}
      </S.ScreenWrapper>
    </Layout>
  );
}

// 직업정해주기
// 낮 -> 밤 -> 낮 -> 밤 반복
// 밤 -> 3분
// 낮 회의시간 2분
// 낮 -> 투표

export default GameRoom;
