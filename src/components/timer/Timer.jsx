import { useCallback, useEffect, useState } from 'react';
import * as S from 'components/timer/Timer.style';
import { GiTimeBomb } from 'react-icons/gi';

function Timer({ initSecond }) {
  const [count, setCount] = useState(15);

  useEffect(() => {
    if (count === 0) {
      setCount(15);
      return;
    }
    const calculate = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(calculate);
  }, [count]);

  const convertTime = useCallback((seconds) => {
    const addZero = (num) => (num < 10 ? '0' : '') + num;

    if (seconds < 61) return '00:' + addZero(seconds);

    const mins = Math.floor(seconds / 60);
    const secs = seconds - mins * 60;
    return addZero(mins) + ':' + addZero(secs);
  }, []);

  return (
    <S.TimerWrapper>
      <S.IconBox $sec={count}>
        <GiTimeBomb size={'100%'} />
      </S.IconBox>
      <S.TimeSpan $sec={count}>{convertTime(count)}</S.TimeSpan>
    </S.TimerWrapper>
  );
}

export default Timer;
