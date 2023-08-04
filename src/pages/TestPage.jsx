import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useOpenVidu from 'hooks/useOpenVidu';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

function TestPage() {
  const { session, mainStreamManager, messageList, subscribers, sendMessage, setRoomId, setUserName, joinSession } =
    useOpenVidu();
  const [inputMessage, setInputMessage] = useState({ message: '', nickname: 'testnickname' });

  const handleInputMessage = (e) => {
    setInputMessage({ ...inputMessage, message: e.target.value });
  };
  useEffect(() => {
    setRoomId('ssafy7074');
    setUserName('LEE');
  }, []);

  return (
    <Layout>
      <Header />
      {session ? (
        <Testbody>
          <UserVideoComponent streamManager={mainStreamManager} />
          {subscribers &&
            subscribers.map((sub, idx) => {
              return (
                <div key={idx} className="stream-container col-md-6 col-xs-6">
                  <span>{sub.id}</span>
                  <UserVideoComponent streamManager={sub} />
                </div>
              );
            })}
          <div>
            <div>
              {messageList.map((item, idx) => (
                <div key={idx}>
                  <Message>{item.message}</Message>
                  <Message>{item.nickname}</Message>
                </div>
              ))}
            </div>
            <InputMessage type="text" value={inputMessage.message} onChange={handleInputMessage} />
            <Button
              onClick={() => {
                sendMessage(inputMessage);
                setInputMessage({ ...inputMessage, message: '' });
              }}
            >
              SEND
            </Button>
          </div>
        </Testbody>
      ) : (
        <Button onClick={joinSession}>JOIN</Button>
      )}
    </Layout>
  );
}

function UserVideoComponent({ streamManager }) {
  const getNicknameTag = () => {
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };
  return (
    <div>
      {streamManager !== null ? (
        <div className="streamcomponent">
          <span>{getNicknameTag()}</span>
          <OpenViduVideoComponent streamManager={streamManager} />
        </div>
      ) : null}
    </div>
  );
}

export function OpenViduVideoComponent({ streamManager }) {
  const videoRef = useRef();

  useEffect(() => {
    if (streamManager && videoRef.current) {
      console.log(streamManager.stream.connection.data, ': ', streamManager);
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return <video autoPlay={true} ref={videoRef} />;
}

const Testbody = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: gray;
`;
const Message = styled.div`
  height: 50px;
  padding: 5px;
  background-color: whitesmoke;
`;
const InputMessage = styled.input`
  width: 100px;
  height: 50px;
  background-color: lightcoral;
`;
const Button = styled.button`
  background-color: burlywood;
  border-radius: 10px;
  padding: 10px;
`;

export default TestPage;
