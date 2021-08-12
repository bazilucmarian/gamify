import {useState} from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => setIsOpen(false);
  const showModal = () => setIsOpen(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
    hideModal,
    showModal
  };
};

export default useModal;
