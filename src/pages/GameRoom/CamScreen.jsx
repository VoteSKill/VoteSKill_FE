import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import {
  CustomScreen,
  Day,
  JoinInput,
  KillVote,
  UserId,
  VideoComponent,
  VideoWrapper,
  VoteImage,
} from './CamScreen.Style';
import useOpenVidu from 'hooks/useOpenVidu';

function CamScreen({ sessionId }) {
  const { session, publisher, subscribers, setRoomId, setUserName, joinSession } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    setRoomId(sessionId);
    setUserName(nickname);
    joinSession();
  }, [sessionId]);

  const [imageOn, setImageOn] = useState('');

  const handleClickKillVote = (id) => {
    setImageOn(id);
  };

  return (
    <div>
      {session !== undefined ? (
        <VideoWrapper>
          {publisher !== undefined ? (
            <div>
              <UserVideoComponent streamManager={publisher} />
            </div>
          ) : null}
          {subscribers.map((sub) => (
            <div
              key={sub.stream.streamId}
              onClick={() => {
                handleClickKillVote(sub.stream.streamId);
              }}
            >
              {imageOn === sub.id ? <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}
              <VideoComponent>
                <UserVideoComponent streamManager={sub} />
                <UserId>{sub.id}</UserId>
              </VideoComponent>
            </div>
          ))}
        </VideoWrapper>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const videoRef = useRef();

  const getNicknameTag = () => {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div>
          <CustomScreen autoPlay={true} ref={videoRef} />
          <p>{getNicknameTag()}</p>
        </div>
      ) : null}
    </div>
  );
}

export default CamScreen;
