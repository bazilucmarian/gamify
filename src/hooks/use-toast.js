import {useEffect, useState} from 'react';

const useToast = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isActive === true) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
    return '';
  }, [isActive]);

  const openToast = msg => {
    setMessage(msg);
    setIsActive(true);
  };

  const closeToast = () => {
    setIsActive(false);
  };

  return {isActive, message, openToast, closeToast};
};

export default useToast;
