import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen/CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import useEventSource from 'hooks/useEventsource';
import JobIntroduce from 'components/jobintroduce/JobIntroduce';
import Timer from 'components/timer/Timer';
import JobAssign from 'components/jobassign/JobAssign';
import VoteResult from 'components/voteresult/VoteResult';
import AbilityResult from 'components/abilityresult/AbilityResult';

function GameRoom({ sessionId, openvidu, myRole }) {
  const { setDay, setMafia, setCitizen } = useLayoutChange();
  const nickname = sessionStorage.getItem('nickname');
  const voteData = useEventSource('vote', sessionId, nickname);
  const roomData = useEventSource('room', sessionId, nickname);

  const [timeCount, setTimeCount] = useState(0);
  const [voteParsed, setvoteParsed] = useState('');
  const [roomParsed, setroomParsed] = useState('');
  // 직업배정 모달 열기
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { openModal: openvoteResult } = useModal('VoteResult');
  const { openModal: openabilityResult } = useModal('AbilityResult');

  useEffect(() => {
    setDay();
    setTimeCount(myRole.timer);
    openjobAssign();
  }, [myRole]);

  return (
    <>
      <S.ScreenWrapper>
        <Timer initSecond={timeCount} callbackFunction={() => {}} />
        {openvidu.session && <CamScreen publisher={openvidu.publisher} subscribers={openvidu.subscribers} />}
        <>
          <Modal id="JobAssign">
            <JobAssign data={myRole.role} />
          </Modal>
          <Modal id="VoteResult">
            <VoteResult data={voteParsed} />
          </Modal>
          <Modal id="AbilityResult">
            <AbilityResult data={roomParsed} />
          </Modal>
        </>
      </S.ScreenWrapper>
    </>
  );
}

export default GameRoom;
