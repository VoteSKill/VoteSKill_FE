import gameAPI from 'apis/gameAPI';
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as OVAtom from 'recoil/atoms/openViduState';

const useOpenVidu = () => {
  const [OV, setOV] = useState(null);
  const [session, setSession] = useState(null);
  const [mainStreamManager, setMainStreamManager] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const [device, setDevice] = useState([]);
  const [currentVideoDevice, setCurrentVideoDevice] = useState([]);

  const [roomId, setRoomId] = useRecoilState(OVAtom.roomIdState);
  const [userName, setUserName] = useRecoilState(OVAtom.userNameState);
  const [messageList, setMessageList] = useState([]);
  const [publisherSetting, setPublisherSetting] = useRecoilState(OVAtom.publisherState);

  const joinSession = useCallback(() => {
    const newOV = new OpenVidu();
    newOV.enableProdMode();
    const mySession = newOV.initSession();

    mySession.on('streamCreated', (event) => {
      const subscriber = mySession.subscribe(event.stream, undefined);
      setSubscribers((subscribers) => [...subscribers, subscriber]);
    });

    mySession.on('streamDestroyed', (event) => {
      deleteSubscriber(event.stream.streamManager);
    });

    mySession.on('exception', (exception) => {
      console.warn('exception:', exception);
    });
    mySession.on('signal', (event) => {
      const message = event.data;
      const nickname = JSON.parse(event.from.data).clientData;
      setMessageList((messageList) => [...messageList, { message, nickname }]);
    });
    setOV(newOV);
    setSession(mySession);
  }, []);

  useEffect(() => {
    if (!session) return;
    getToken().then(async (token) => {
      try {
        await session.connect(token, { clientData: userName });

        let publisher = await OV.initPublisherAsync(undefined, publisherSetting);

        session.publish(publisher);

        const devices = await OV.getDevices();
        const videoDevices = devices.filter((device) => device.kind === 'videoinput');
        const currentVideoDeviceId = publisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
        const currentVideoDevice = videoDevices.find((device) => device.deviceId === currentVideoDeviceId);

        setMainStreamManager(publisher);
        setPublisher(publisher);
        setCurrentVideoDevice(currentVideoDevice);
      } catch (error) {
        console.log('세션 연결에 오류가 발생했습니다.', error, error.message);
      }
    });
  }, [OV, session, roomId]);

  // const getToken = async (roomData) => {
  //   const sessionResponse = await gameAPI.setRoom(roomData); // createSession: 방이름 리턴해서 ws토큰 받아야 함
  //   const roomId = sessionResponse.data.room.name; // 백엔드에서 받아오는 방 정보
  //   const { data } = await gameAPI.enterRoom(roomId);
  //   return data.token;
  // };

  const getToken = useCallback(async () => {
    return createSession(roomId).then((sessionId) => createToken(sessionId));
  }, [roomId]);

  const createSession = async (roomId) => {
    const response = await axios.post(
      process.env.REACT_APP_SERVER_URL + 'api/sessions',
      { customSessionId: roomId },
      { headers: { 'Content-Type': 'application/json' } },
    );
    return response.data; // The sessionId
  };

  const createToken = async (roomId) => {
    const response = await axios.post(
      process.env.REACT_APP_SERVER_URL + 'api/sessions/' + roomId + '/connections',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    );
    return response.data; // The token
  };

  const sendMessage = (inputMessage) => {
    session
      .signal({
        data: inputMessage.message, // Any string (optional)
        to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
        type: 'my-chat', // The type of message (optional)
      })
      .then(() => {
        console.log('Message successfully sent');
      })
      .catch((error) => {
        alert('메세지 전송에 실패했습니다.');
      });
  };

  const deleteSubscriber = useCallback((streamManager) => {
    setSubscribers((prevSubscribers) => {
      const index = prevSubscribers.indexOf(streamManager);
      if (index > -1) {
        const newSubscribers = [...prevSubscribers];
        newSubscribers.splice(index, 1);
        return newSubscribers;
      } else {
        return prevSubscribers;
      }
    });
  }, []);

  const leaveSession = useCallback(() => {
    if (session) {
      session.disconnect();
    }
    setOV(new OpenVidu());
    setSession(undefined);
    setSubscribers([]);
    setMainStreamManager(undefined);
    setPublisher(undefined);
  }, [session]);

  const handleMainVideoStream = useCallback(
    (stream) => {
      if (mainStreamManager !== stream) {
        setMainStreamManager(stream);
      }
    },
    [mainStreamManager],
  );

  useEffect(() => {
    const handleBeforeUnload = () => leaveSession();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [leaveSession]);

  return {
    OV,
    session,
    mainStreamManager,
    publisher,
    subscribers,
    device,
    currentVideoDevice,
    setRoomId,
    setUserName,
    joinSession,
    leaveSession,
    handleMainVideoStream,
    sendMessage,
    messageList,
    setPublisherSetting,
  };
};
export default useOpenVidu;
