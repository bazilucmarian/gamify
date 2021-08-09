import {useEffect, useState} from 'react';

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

  const openToast = msg => {
    setMessage(msg);
    setIsVisible(true);
  };

  const closeToast = () => {
    setIsVisible(false);
  };

  return {isVisible, message, openToast, closeToast};
};

export default useToast;
