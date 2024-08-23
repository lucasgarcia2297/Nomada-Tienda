import { useState } from "react";

export const useForm = ({initialValues,validations}) => {
  const [values, setValues ] = useState(initialValues);
  const [errors, setErrors] = useState(null);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    errors,
    handleChange,
    resetForm
  };
}