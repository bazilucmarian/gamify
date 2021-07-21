import {useState} from 'react';

const useForm = initialState => {
  const [fields, setValues] = useState(initialState);

  const bind = event => {
    const {id, value} = event.target;
    setValues({
      ...fields,
      [id]: value
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [fields, bind, reset];
};

export default useForm;
