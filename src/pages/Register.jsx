import { useState } from "react";
import '../styles/Account.css'
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fistName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();


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
              id='fistName'
              value={formData.fistName}
              onChange={handleChange}
              placeholder="Juan"
              required
            />
          </section>
          <section>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type='text'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Perez"
              required
            />
          </section>
          <section>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label htmlFor="birthDate">Fecha de nacimiento:</label>
            <input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </section>
          <section className="btn-conteiner">
            <button type="submit">Crear cuenta</button>
            <p>¿Ya tienes una cuenta?<Link to='/login'>Iniciar Sesión</Link></p>
            </section>
        </form>
      </div>
    </div>
  );
};

export default Register;