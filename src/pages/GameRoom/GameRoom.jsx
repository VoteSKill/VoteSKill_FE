import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import useOpenVidu from 'hooks/useOpenVidu';
import useEventSource from 'hooks/useEventsource';
import JobIntroduce from 'components/jobintroduce/JobIntroduce';
import Timer from 'components/timer/Timer';
import JobAssign from 'components/jobassign/JobAssign';
import VoteResult from 'components/voteresult/VoteResult';
import AbilityResult from 'components/abilityresult/AbilityResult';

function GameRoom() {
  const { isVote, setVote } = useState(false);
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();

  const location = useLocation();
  const sessionId = location.state.sessionId;
  const nickname = sessionStorage.getItem('nickname');

  // 역할배분
  const roleData = useEventSource('role', sessionId, nickname);
  // 투표결과
  const voteData = useEventSource('vote', sessionId, nickname);
  // 모든알림(능력사용결과 등)
  const roomData = useEventSource('room', sessionId, nickname);

  const [roleParsed, setroleParsed] = useState('');
  const [voteParsed, setvoteParsed] = useState('');
  const [roomParsed, setroomParsed] = useState('');
  // 직업배정 모달 열기
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { openModal: openvoteResult } = useModal('VoteResult');
  const { openModal: openJobIntroduceModal } = useModal('JobIntroduce');
  const { openModal: openabilityResult } = useModal('AbilityResult');

  // const minutes = Math.floor(time / 60) >= 0 ? Math.floor(time / 60) : 0; // 분
  // const seconds = Math.floor(time % 60) >= 0 ? Math.floor(time % 60) : 0; // 초

  //투표

  useEffect(() => {
    setDay();
    // roleData 변경될 때마다 checkData 실행
    checkData();
    console.log('호출');
  }, []);

  useEffect(() => {
    if (roleParsed) {
      // roleParsed 값이 변경되면 모달을 열도록 실행
      openjobAssign();
      // openjobAssign() 받자마자 타이머 실행
      Timer(120);
    }
  }, [roleParsed]);

  useEffect(() => {
    if (voteParsed) {
      // roleParsed 값이 변경되면 모달을 열도록 실행
      openvoteResult();
      // openjobAssign() 받자마자 타이머 실행
      Timer(5);
    }
  }, [roleParsed]);

  useEffect(() => {
    if (roomParsed) {
      // roleParsed 값이 변경되면 모달을 열도록 실행
      openvoteResult();
      // openjobAssign() 받자마자 타이머 실행
      Timer(5);
    }
  }, [roomParsed]);

  const checkData = () => {
    console.log(roleData);
    setroleParsed(roleData);
  };

  const handleModal = (sseMessage) => {
    // console.log('콜백한거임..');
    // vote로 들어오면
    // if (sseMessage == '') return openjobAssign();
    console.log(sseMessage, 'vote일때');
    // return openvoteResult();
    // ability로 들어오면
    // else (sseMessage == "")
    // return openabilityResult()
  };
  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      <S.ScreenWrapper>
        <Timer
          initSecond={5}
          callbackFunction={() => {
            handleModal();
          }}
        />
        <CamScreen sessionId={sessionId} />
      </S.ScreenWrapper>
      <button onClick={checkData}>메뉴</button>
      <br />
      <div>
        <HiQuestionMarkCircle size={'5%'} onClick={openjobAssign} />
      </div>
      <Modal id="JobAssign">
        <JobAssign data={roleData} />
      </Modal>
      <Modal id="VoteResult">
        <VoteResult data={voteParsed} />
      </Modal>
      <Modal id="AbilityResult">
        <AbilityResult data={roomParsed} />
      </Modal>
      {roleData}
      {roleParsed}파스데이터
    </Layout>
  );
}

export default GameRoom;
