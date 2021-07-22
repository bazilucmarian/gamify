import {useState} from 'react';

const useDisplay = (initialMode = false) => {
  const [isVisible, setIsVisible] = useState(initialMode);
  const toggle = () => setIsVisible(!isVisible);

  const display = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    display,
    hide,
    toggle
  };
};

export default useDisplay;
