import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen/CamScreen';
import { useEffect, useState } from 'react';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import useEventSource from 'hooks/useEventsource';
import Timer from 'components/timer/Timer';
import JobAssign from 'components/jobassign/JobAssign';
import VoteResult from 'components/voteresult/VoteResult';
import AbilityResult from 'components/abilityresult/AbilityResult';
import { currentTimeState } from 'recoil/atoms/gameState';
import { useRecoilState } from 'recoil';

function GameRoom({ sessionId, openvidu, myRole }) {
  const { setDay, setMafia, setCitizen } = useLayoutChange();
  const nickname = sessionStorage.getItem('nickname');
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { openModal: openvoteResult } = useModal('VoteResult');
  const { openModal: openabilityResult } = useModal('AbilityResult');

  const [voteData, setVoteData] = useEventSource('vote', sessionId, nickname);
  const [roomData, setRoomData] = useEventSource('room', sessionId, nickname);

  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

  const [voteParsed, setvoteParsed] = useState();
  const [roomParsed, setroomParsed] = useState();

  useEffect(() => {
    setDay();
    setCurrentTime(myRole.timer);
    openjobAssign();
  }, [myRole]);

  return (
    <S.ScreenWrapper>
      <Timer />
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
  );
}

export default GameRoom;
