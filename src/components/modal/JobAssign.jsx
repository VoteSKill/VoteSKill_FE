import * as S from 'components/modal/JobAssign.Style';
import useLayoutChange from 'hooks/useLayoutChange';

function JobAssign() {
  const { layout } = useLayoutChange();
  const job = 'spy';

  const jobimage = (job) => {
    const src = process.env.PUBLIC_URL + `/image/game/job/${job}.jpg`;
    return src;
  };

  const jobText = (job) => {
    if (job == 'mafia') {
      return '마피아';
    } else if (job == 'politician') {
      return '정치인';
    } else if (job == 'spy') {
      return '스파이';
    }
  };

  return (
    <S.JobAssignModalBody layout={layout}>
      <S.JobImage src={jobimage(job)}></S.JobImage>
      <S.JobAssignText>당신은 {jobText(job)} 입니다.</S.JobAssignText>
    </S.JobAssignModalBody>
  );
}

export default JobAssign;
