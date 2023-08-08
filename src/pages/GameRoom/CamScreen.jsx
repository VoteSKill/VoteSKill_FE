import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import { CustomScreen, JoinInput, VoteImage } from './CamScreen.Style';
import useOpenVidu from 'hooks/useOpenVidu';

function CamScreen() {
  const { session, publisher, subscribers, joinSession, handleMainVideoStream } = useOpenVidu();

  return (
    <div className="container">
      {session === undefined ? (
        <div id="join">
          <div id="join-dialog" className="jumbotron vertical-center">
            <form className="form-group" onSubmit={joinSession}>
              <p className="text-center">
                <JoinInput className="btn btn-lg btn-success" name="commit" type="submit" value="참가하기" />
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {session !== undefined ? (
        <div id="session">
          <div id="video-container" className="col-md-6">
            {publisher !== undefined ? (
              <div className="stream-container col-md-6 col-xs-6" onClick={() => handleMainVideoStream(publisher)}>
                <UserVideoComponent streamManager={publisher} />
              </div>
            ) : null}
            {subscribers.map((sub, i) => (
              <div
                key={sub.stream.streamId}
                className="stream-container col-md-6 col-xs-6"
                onClick={() => this.handleMainVideoStream(sub)}
              >
                <span>{sub.id}</span>
                <UserVideoComponent streamManager={sub} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const getNicknameTag = () => {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div className="flex-col items-center">
          <OpenViduVideoComponent streamManager={props.streamManager} />
          <p>{getNicknameTag()}</p>
        </div>
      ) : null}
    </div>
  );
}

function OpenViduVideoComponent(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (props && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props]);

  const ImageOn = () => {
    return <VoteImage src={process.env.PUBLIC_URL + '/image/game/killvote.png'}></VoteImage>;
  };

  return (
    <div>
      <VoteImage src={process.env.PUBLIC_URL + '/image/game/killvote.png'}></VoteImage>
      <CustomScreen autoPlay={true} ref={videoRef}></CustomScreen>
    </div>
  );
}

export default CamScreen;
