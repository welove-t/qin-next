import { useEffect } from 'react';

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightBlue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
};
