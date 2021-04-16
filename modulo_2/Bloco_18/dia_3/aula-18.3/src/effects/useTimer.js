import { useEffect } from 'react';

const useTimer = (func, interval) => {

  useEffect((xablau = 'oi') => {
    console.log(xablau);
    func();

    const timer = setInterval(
      func,
      interval
    );

    return () => {
      clearInterval(timer);
    }
  }, [func, interval])
}

export default useTimer;