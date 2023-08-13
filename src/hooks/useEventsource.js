import { useEffect, useState } from 'react';

const useEventSource = (eventType, sessionId, nickname) => {
  const URL = process.env.REACT_APP_GAME_SERVER_URL + `/sse/enter/${sessionId}/${nickname}`;
  const [realData, setRealData] = useState();

  useEffect(() => {
    const source = new EventSource(URL);

    source.onmessage = (event) => {
      console.log('onmessage', event.data);
    };

    source.addEventListener(eventType, function (e) {
      console.log(e.data);
      const parsedData = JSON.parse(e.data);
      setRealData(parsedData);
    });

    source.onopen = () => {
      console.log('연결 성공');
    };

    source.onerror = () => {
      console.log('연결 중 에러 발생');
      source.close();
    };

    return () => source.close();
  }, [sessionId, nickname]);

  return [realData, setRealData];
};
export default useEventSource;
