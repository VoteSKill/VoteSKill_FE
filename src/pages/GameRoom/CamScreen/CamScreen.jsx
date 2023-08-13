import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';

function CamScreen({ publisher, subscribers }) {
  const [imageOn, setImageOn] = useState('');

  const handleClickKillVote = (id) => {
    setImageOn(id);
  };

  return (
    <S.VideoWrapper>
      {publisher !== undefined ? <UserVideoComponent streamManager={publisher} /> : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <div
            key={sub.stream.streamId}
            onClick={() => {
              handleClickKillVote(sub.stream.streamId);
            }}
          >
            <UserVideoComponent streamManager={sub} />
            {imageOn === sub.id ? <S.KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}
          </div>
        ))}
    </S.VideoWrapper>
  );
}

function UserVideoComponent(props) {
  const videoRef = useRef();

  const getNicknameTag = (sub) => {
    return JSON.parse(sub.stream.connection.data).clientData;
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      console.log(props);
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <>
      {props.streamManager !== undefined ? (
        <S.UserInfoWrapper>
          <S.VideoContainer>
            <S.CustomScreen autoPlay={true} ref={videoRef} />
          </S.VideoContainer>
          <span>{getNicknameTag(props.streamManager)}</span>
        </S.UserInfoWrapper>
      ) : null}
    </>
  );
}

export default CamScreen;
