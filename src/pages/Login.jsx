import { useForm } from '../hooks/useForm';
import '../styles/Account.css';
import { Link } from 'react-router-dom';

function Login() {
  const initialValues = {
    email:'',
    password:''
  }
  const { values, handleChange, resetForm } = useForm({initialValues}); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de inicio de sesión', values);
    resetForm();
  }


  return (
    <div className="container">
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} action="">
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
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </section>
          <section className='btn-conteiner'>
            <button type="submit">Iniciar sesión</button>
            <p>¿No tienes una cuenta aún? <Link to='/register'>Creá tu cuenta</Link></p>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Login