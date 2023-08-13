import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './CamScreen.Style';

function CamScreen({ publisher, subscribers }) {
  const [imageOn, setImageOn] = useState('');

  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <UserVideoComponent streamManager={publisher} setImageOn={setImageOn} imageOn={imageOn} />
      ) : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <UserVideoComponent key={sub.stream.streamId} streamManager={sub} setImageOn={setImageOn} imageOn={imageOn} />
        ))}
    </S.VideoWrapper>
  );
}

function UserVideoComponent(props) {
  const videoRef = useRef();

  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  const handleClickKillVote = (sub) => props.setImageOn(getNicknameTag(sub));

  const checkVote = (sub) => props.imageOn === getNicknameTag(sub);

  const resetVote = () => props.setImageOn('');

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <>
      {props.streamManager !== undefined ? (
        <S.UserInfoWrapper>
          {checkVote(props.streamManager) && (
            <S.KillVote
              src={process.env.PUBLIC_URL + '/image/game/killvote.png'}
              onClick={() => resetVote(props.streamManager)}
            />
          )}
          <S.VideoContainer onClick={() => handleClickKillVote(props.streamManager)}>
            <S.CustomScreen autoPlay={true} ref={videoRef} />
          </S.VideoContainer>
          <span>{getNicknameTag(props.streamManager)}</span>
        </S.UserInfoWrapper>
      ) : null}
    </>
  );
}

export default React.memo(CamScreen);
