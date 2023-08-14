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
import Swal from 'sweetalert2';
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

  const checkDeath = (deathArray) => {
    const isDeath = deathArray.find((playerNickname) => playerNickname === nickname);
    console.log('isDeath', isDeath);
    return isDeath === undefined ? false : true;
  };

  const setDeath = () => {
    openvidu.publisher.publishAudio(false);
    openvidu.publisher.publishVideo(false);
  };

  useEffect(() => {
    // 최초 입장 시 직업 배정 알리미
    setDay();
    console.log(myRole['role']);
    setCurrentTime(myRole.timer);
    openjobAssign(myRole['role']);
    openvidu.setPublisherSetting({ ...openvidu.publisherSetting, publishAudio: true, publishVideo: true });
  }, [myRole]);

  useEffect(() => {
    // 투표 시간 알리미
    if (voteData) {
      Swal.fire({
        title: '마피아라고 생각되는 사람을 클릭하세요',
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      console.log('voteData', voteData);
      setIsVoteTime(true);
      setCurrentTime(voteData.timer);
    }
  }, [voteData]);

  useEffect(() => {
    // 능력/투표 결과 알리미
    if (roomData) {
      if (roomData.type === 'vote') {
        setVoteResult(roomData.messages);
        setMafia();
        Swal.fire({
          title: `{${roomData.messages}}`,
          // html:
          showCancelButton: false,
          confirmButtonText: '확인',
        });
      } else if (roomData.type === 'skill') {
        setSkillResult(roomData.messages);
        setDay();
        Swal.fire({
          title: `{${roomData.message}}`,
          // html:
          showCancelButton: false,
          confirmButtonText: '확인',
        });
      }
      if (checkDeath(roomData.death)) setDeath();
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
