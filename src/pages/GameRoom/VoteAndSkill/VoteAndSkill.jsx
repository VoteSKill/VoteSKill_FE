import { KillVote, SkillImage } from './VoteAndSkill.style';

function VoteAndSkill(props) {
  const checkVote = (sub) => props.imageOn === props.getNicknameTag(sub);

  const resetVote = () => props.setImageOn('');

  return (
    <>
      {props.isVoteTime && checkVote(props.streamManager) && (
        <KillVote
          src={process.env.PUBLIC_URL + '/image/game/killvote.png'}
          onClick={() => resetVote(props.streamManager)}
        />
      )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'MAFIA' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_mafia.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        // 직업에따라 능력사용
        props.myRole === 'POLICE' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_police.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'DOCTOR' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_doctor.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'GANG' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_gang.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'REPORTER' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_reporter.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'POLITICIAN' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_politician.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {props.isSkillTime &&
        checkVote(props.streamManager) &&
        props.myRole === 'POLITICIAN' && (
          <SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_politician.svg'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
    </>
  );
}

export default VoteAndSkill;
