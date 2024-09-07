import { useForm } from "../hooks/useForm.js";
import '../styles/Account.css'
import { Link } from "react-router-dom";

function Register() {
  const initialValues = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: ''
  };

  const onValidate = (values) => {
    let isError = false;
    const errors = {};
    
    if(!values.firstName.trim()){
      errors.firstName = "El nombre no debe estar vacío.";
      isError = true;
    }
    if(!values.lastName.trim()){
      errors.lastName = "El apellido no debe estar vacío.";
      isError = true;
    }
    return isError ? errors : null;
  }

  const {values,errors, handleChange, handleSubmit } = useForm({initialValues, onValidate});

  return (
    <div className="container">
      <div className="register-container">
        <h2>Registro de usuario</h2>
        <form className='register-form' onSubmit={handleSubmit} action="">
          <section>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              placeholder="Ej: Juan"
            />
            {errors.firstName &&<div className="error-message">{errors.firstName}</div>}
          </section>
          <section>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type='text'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              placeholder="Ej: Perez"
              // required
            />
          </section>
          <section>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Ej: juanperez@mail.com"
              // required
            />
          </section>
          <section>
            <label htmlFor="birthDate">Fecha de nacimiento:</label>
            <input
              type="date"
              name="birthDate"
              value={values.birthDate}
              onChange={handleChange}
              // required
            />
          </section>
          <section>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              // required
            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </section>
          <section className="btn-conteiner">
            <button type="submit">Crear cuenta</button>
            <p>¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión</Link></p>
            </section>
        </form>
      </div>
    </div>
  );
};

export default Register;