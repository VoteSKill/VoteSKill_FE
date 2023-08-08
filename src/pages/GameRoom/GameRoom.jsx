import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';

function GameRoom() {
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();
  const { isVote, setVote } = useState(false);
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

  // 낮 -> 투표 -> 밤 -> 능력사용 : 반복

  const time = (layout) => {
    if (layout.Day) {
      if (isVote) {
        return ' 0:15';
      }
      return ' 3:00';
    } else {
      return ' 1:00';
    }
  };

  const comment = (layout) => {
    if (layout.Day) {
      if (isVote) {
        return '마피아로 생각되는 사람을 투표해주세요.';
      }
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
            <CamScreen></CamScreen>
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

export default GameRoom;
