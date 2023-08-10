import { useEffect, useState } from 'react';

const useEventSource = (server) => {
  const url = process.env.REACT_APP_GAME_SERVER_URL + `/${server}`;
  const [data, setData] = useState();
  const [listening, setListening] = useState(false);
  const [eventSource, setEventSource] = useState(undefined);

  const startListening = () => {
    if (!listening) {
      const source = new EventSource(url); // 구독했어요
      setEventSource(source);

      source.onopen = () => {
        console.log('연결 성공');
      };

      source.onmessage = async (event) => {
        const response = await event.data;
        console.log(response);
        const parsedData = JSON.parse(response);
        setData(parsedData);
      };

      source.onerror = () => {
        console.log('연결 중 에러 발생');
        source.close();
      };

      setListening(true);
    }
  };

  const stopListening = () => {
    console.log('이벤트소스 닫힘');
    if (eventSource) {
      eventSource.close();
      setListening(false);
    }
  };

  useEffect(() => {
    startListening();

    return () => {
      stopListening();
    };
  }, []);

  return { data, startListening, stopListening };
};

export default useEventSource;
