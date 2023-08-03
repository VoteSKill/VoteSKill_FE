import Modal from 'components/modal/Modal';
import * as S from 'components/jobintroduce/JobIntroduce.Style';
import React, { useState, useEffect } from 'react';
import { Background } from 'components/layout/Layout.Style';

function JobIntroduce() {
  const modalImg = [
    '/image/jobintroduce/mafia.png',
    '/image/jobintroduce/spy.png',
    '/image/jobintroduce/policer.png',
    '/image/jobintroduce/doctor.png',
    '/image/jobintroduce/soldier.png',
    '/image/jobintroduce/politician.png',
    '/image/jobintroduce/developer.png',
    '/image/jobintroduce/reporter.png',
    '/image/jobintroduce/priest.png',
    '/image/jobintroduce/gangster.png',
  ];
  const modalJob = ['마피아', '스파이', '경찰', '의사', '군인', '정치인', '개발자', '기자', '성직자', '갱스터'];
  const modalDescription = [
    '밤에 한 명을 죽일 수 있습니다.',
    '시민팀에 잠입하여 밤마다 플레이어 한명을 골라 그 직업을 알수있다. 그 대상이 마피아인경우 스파이는 마피아팀으로 복귀한다.',
    '밤이 될 경우 한 명을 조사하여 마피아 여부를 알수있다.',
    '마피아에게 살해 당할 것 같은 한명을 골라, 일치 할 시 대상을 살릴수있다.',
    '마피아의 타겟이 된경우 한차례 버틸수있다. 단, 이후 직업이 모두 공개된다.',
    '투표권이 2개. 투표로 처형되지않는다.',
    '시스템에 오류를 일으킨다. 밤에 화상과 음성기능을 사용할 수 있다.',
    '모든사람한테 찍은사람 직업을 공지처럼 알려줌. 게임 중 1번만 발동할 수 있으며, 두번째 밤부터 사용가능하다.',
    '밤에 죽은 플레이어 한명을 부활 시킨다. (1회)',
    '밤에 지목된 플레이어는 투표에 참여할수없으며, 마피아일 경우 사람을 죽일수없다.',
  ];

  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const goToNextModal = () => {
    setCurrentModalIndex((prevIndex) => (prevIndex + 1) % modalJob.length);
  };

  // 이전 모달로 이동하는 함수
  const goToPreviousModal = () => {
    setCurrentModalIndex((prevIndex) => (prevIndex === 0 ? modalJob.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <S.JobIntroduceBackground isRed={currentModalIndex === 0 || currentModalIndex === 1}>
        <S.Job>
          {/* <S.JobImg src={process.env.PUBLIC_URL + '/image/jobintroduce/mafia.png'} alt="mafia" /> */}
          <S.JobImg src={process.env.PUBLIC_URL + modalImg[currentModalIndex]} alt="mafia" />

          <S.JobIntroduceDiv>
            <S.JobName>{modalJob[currentModalIndex]}</S.JobName>
            <S.JobDescription>{modalDescription[currentModalIndex]}</S.JobDescription>
          </S.JobIntroduceDiv>
        </S.Job>
        {/* <S.InputArea>
          <NickName></NickName>
          <WinRate></WinRate>
        </S.InputArea> */}
        <S.ButtonArea>
          <S.ScrollButtonLeft onClick={goToPreviousModal}></S.ScrollButtonLeft>
          <S.ScrollButtonRight onClick={goToNextModal}></S.ScrollButtonRight>
        </S.ButtonArea>
      </S.JobIntroduceBackground>
    </div>
  );
}

// Parent
function NickName() {
  const [nickname, setNickname] = useState('튀튀');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // 백엔드 닉네임 불러옴
    setNickname('어몽어스');
  }, []);

  // input 활성화
  const onUpdateClick = () => {
    if (update) {
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  };

  const onChange = (event) => {
    // input 값 가져오기, state값 수정
    setNickname(event.target.value);
    // 백엔드 전송
  };

  return (
    <div>
      <S.Label>닉네임 : </S.Label>
      {update ? (
        <S.NicknameInput onChange={onChange} value={nickname}></S.NicknameInput>
      ) : (
        <S.NicknameSpan>{nickname}</S.NicknameSpan>
      )}
      <NickNameUpdate onUpdateClick={onUpdateClick}></NickNameUpdate>
    </div>
  );
}

// Child
function NickNameUpdate({ onUpdateClick }) {
  return (
    <S.NicknameFixIcon
      onClick={() => {
        onUpdateClick();
      }}
    ></S.NicknameFixIcon>
  );
}

function WinRate() {
  // 백엔드에서 승, 패 정보 받기
  const [rank, setRank] = useState('unrated');
  const [rate, setRate] = useState({ win: 0, lose: 0, rate: 0.0 });

  const winRateRank = (winRate) => {
    if (0 <= winRate && winRate < 40) {
      setRank('초보');
    } else if (40 <= winRate && winRate < 50) {
      setRank('중수');
    } else if (winRate >= 50) {
      setRank('고수');
    } else {
      setRank('unrated');
    }
  };
  useEffect(() => {
    // 백엔드로 부터 승, 패 받아오기
    setRate({ win: 70, lose: 30, rate: Math.round((70 / (70 + 30)) * 100) });
  }, []);

  useEffect(() => {
    winRateRank(rate.rate);
  }, [rate]);

  return (
    <div>
      <S.Label>승률 : </S.Label>
      <S.WinRateSpan>
        {rate.win + rate.lose}전 {rate.win}승 {rate.lose}패
      </S.WinRateSpan>

      {rank === '초보' && <S.BeginnerIcon>{rank}</S.BeginnerIcon>}
      {rank === '중수' && <S.ImmediateIcon>{rank}</S.ImmediateIcon>}
      {rank === '고수' && <S.ExpertIcon>{rank}</S.ExpertIcon>}
    </div>
  );
}

export default JobIntroduce;
