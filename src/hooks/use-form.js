import {useCallback, useEffect, useState} from 'react';

export const useForm = (initialState, onSubmitCallback, validate) => {
  const [fields, setFields] = useState();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitCallback();
    }
  }, [errors, isSubmitting, onSubmitCallback]);

  useEffect(() => {
    setFields(initialState);
  }, [initialState?.id]);

  const handleChange = useCallback(e => {
    let {value} = e.target;
    const {id, type} = e.target;

    if (type === 'number') {
      value = Number(value);
    }
    setFields(prevState => ({...prevState, [id]: value}));
  }, []);

  const resetForm = useCallback(() => {
    setFields({});
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrors(validate(fields));
    },
    [fields, validate]
  );

  return {
    fields,
    handleChange,
    resetForm,
    handleSubmit,
    errors
  };
};
