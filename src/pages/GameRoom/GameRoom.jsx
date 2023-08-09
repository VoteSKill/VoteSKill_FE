import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import JobAssign from 'components/modal/JobAssign';
import { useLocation } from 'react-router-dom';

function GameRoom() {
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();
  const { isVote, setVote } = useState(false);

  const location = useLocation();
  const sessionId = location.state.sessionId;

  useEffect(() => {
    setDay();
  }, []);

  const imageUrl = (layout) => {
    if (layout.Day) {
      return process.env.PUBLIC_URL + '/image/game/timeicon.svg';
    } else {
      return process.env.PUBLIC_URL + '/image/game/time_icon_white.svg';
    }
  };

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
        <S.PreVideoArea>
          {/* <JobAssign showJobAssign={true} /> */}
          <CamScreen sessionId={sessionId} />
        </S.PreVideoArea>
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
