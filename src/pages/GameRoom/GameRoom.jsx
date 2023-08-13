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
import { currentTimeState, isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';
import { useRecoilState } from 'recoil';

function GameRoom({ sessionId, openvidu, myRole }) {
  const { setDay, setMafia, setCitizen } = useLayoutChange();
  const nickname = sessionStorage.getItem('nickname');
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { openModal: openvoteResult } = useModal('VoteResult');
  const { openModal: openabilityResult } = useModal('AbilityResult');

  const { voteData, roomData } = useEventSource(sessionId, nickname);

  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

  const [voteResult, setVoteResult] = useState([]);
  const [skillResult, setSkillResult] = useState([]);

  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);

  useEffect(() => {
    // 최초 입장 시 직업 배정 알리미
    setDay();
    setCurrentTime(myRole.timer);
    openjobAssign();
  }, [myRole]);

  useEffect(() => {
    // 투표 시간 알리미
    if (voteData) {
      console.log('voteData', voteData);
      setIsVoteTime(true);
      setCurrentTime(voteData.timer);
    }
  }, [voteData]);

  useEffect(() => {
    // 능력/투표 결과 알리미
    if (roomData) {
      if (roomData.type === 'vote') {
        setVoteResult(roomData.message);
        setMafia();
      } else if (roomData.type === 'skill') {
        setSkillResult(roomData.message);
        setDay();
      }
      setCurrentTime(roomData.timer);
      // + 카메라 처리
    }
  }, [roomData]);

  return (
    <S.ScreenWrapper>
      <Timer />
      {openvidu.session && <CamScreen publisher={openvidu.publisher} subscribers={openvidu.subscribers} />}
      <>
        <Modal id="JobAssign">
          <JobAssign data={myRole.role} />
        </Modal>
        <Modal id="VoteResult">
          <VoteResult data={voteResult} />
        </Modal>
        <Modal id="AbilityResult">
          <AbilityResult data={skillResult} />
        </Modal>
      </>
    </S.ScreenWrapper>
  );
}

export default GameRoom;
