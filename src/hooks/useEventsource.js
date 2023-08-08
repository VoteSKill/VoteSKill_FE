import { useEffect, useState } from 'react';

const useEventSource = (roomId, userId) => {
  const url = process.env.REACT_APP_GAME_SERVER_URL + `/sse/enter/${roomId}/${userId}`;
  const [data, setData] = useState();

  useEffect(() => {
    const source = new EventSource(url);

    source.onmessage = async (event) => {
      const response = await event.data;
      const parsedData = JSON.parse(response);
      setData(parsedData);
    };

    source.onopen = () => {
      console.log('연결 성공');
    };

    source.onerror = () => {
      console.log('연결 중 에러 발생');
      source.close();
    };
  }, []);

  return data;
};

export default useEventSource;
