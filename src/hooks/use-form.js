import {useCallback, useEffect, useState} from 'react';

export const useForm = (initialState, onSubmitCallback, validate) => {
  const [fields, setFields] = useState();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = useCallback(() => {
    const blankState = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, '']));
    setFields(blankState);
  }, [fields]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitCallback(fields);
      resetForm();
      setIsSubmitting(false);
    }
  }, [errors, fields, isSubmitting, onSubmitCallback, resetForm]);

  useEffect(() => {
    setFields(initialState);
  }, [initialState]);

  const handleChange = useCallback((e, fieldName, fieldValue) => {
    let {value} = e.target;
    const {id, type} = e.target;

    if (type === 'number') {
      value = Number(value);
    }
    setFields(prevState => ({
      ...prevState,
      [id]: value,
      ...(fieldName && {[fieldName]: fieldValue})
    }));
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
