import { useForm } from "../hooks/useForm.js";
import '../styles/Account.css'
import { Link } from "react-router-dom";

function Register() {
  const initialValues = {
    fistName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: ''
  };

  const {values, handleChange, resetForm } = useForm({initialValues});


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del registro', values);
    resetForm();


  }

  return (
    <div className="container">
      <div className="register-container">
        <h2>Registro de usuario</h2>
        <form className='register-form' onSubmit={handleSubmit} action="">
          <section>
            <label htmlFor="fistName">Nombre:</label>
            <input
              type='text'
              name='fistName'
              value={values.fistName}
              onChange={handleChange}
              placeholder="Juan"
              required
            />
          </section>
          <section>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type='text'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              placeholder="Perez"
              required
            />
          </section>
          <section>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label htmlFor="birthDate">Fecha de nacimiento:</label>
            <input
              type="date"
              name="birthDate"
              value={values.birthDate}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
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