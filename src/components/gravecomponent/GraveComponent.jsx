import * as S from 'components/gravecomponent/GraveComponent.Style';
import { useRecoilState } from 'recoil';
import { deadPlayerState } from 'recoil/atoms/gameState';
import { checkDeath } from 'utils/checkDeath';

function GraveComponent(props) {
  const [deadPlayers] = useRecoilState(deadPlayerState);

  return (
    <>
      {checkDeath(deadPlayers, props.getNicknameTag(props.streamManager)) ? (
        <S.GraveImage src={process.env.PUBLIC_URL + '/image/game/grave_image.svg'}></S.GraveImage>
      ) : null}
    </>
  );
}

export default GraveComponent;
