import { useState } from "react";

export const useForm = ({initialValues,onValidate}) => {
  const [values, setValues ] = useState(initialValues);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = onValidate(values);
    if(err == null){
      console.log('Enviando formulario...');
      resetForm();
    }else{
      setErrors(err);
    }
    console.log('Datos del registro', values);
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
}