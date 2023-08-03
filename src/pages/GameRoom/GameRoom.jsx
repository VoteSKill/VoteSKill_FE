import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
// 낮이면 -> background change
// 밤이면  -> theme : night

function GameRoom() {
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();

  // setDay() -> 처음실행 / 그 다음부터 4분주기
  // setNight() -> 3분후 실행 / 그다음부터 4분주기

  useEffect(() => {
    // 백엔드 데이터 받아올수도? : 낮, 밤, 시간, 직업
    setDay();
  }, []);

  const camScreenData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  const imageUrl = (layout) => {
    if (layout.Day) {
      return process.env.PUBLIC_URL + '/image/game/timeicon.svg';
    } else {
      return process.env.PUBLIC_URL + '/image/game/time_icon_white.svg';
    }
  };

  const time = (layout) => {
    if (layout.Day) {
      return ' 3:00';
    } else {
      return ' 1:00';
    }
  };

  const comment = (layout) => {
    if (layout.Day) {
      return '~번째 낮입니다.';
    } else {
      if (layout.Mafia) {
        return '당신은 마피아입니다. 죽일 사람을 선택해주세요.';
      } else {
        return '능력을 사용중입니다...';
      }
    }
  };

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      <SecondHeader layout={layout} imageUrl={imageUrl} time={time} comment={comment}></SecondHeader>
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

function SecondHeader({ layout, imageUrl, time, comment }) {
  return (
    <S.TimeHeader layout={layout}>
      <S.TimeIcon src={imageUrl(layout)} />
      <S.LeftTime>{time(layout)}</S.LeftTime>
      <S.DayText>{comment(layout)}</S.DayText>
    </S.TimeHeader>
  );
}

// 직업정해주기
// 낮 -> 밤 -> 낮 -> 밤 반복
// 밤 -> 3분
// 낮 회의시간 2분
// 낮 -> 투표

export default GameRoom;
