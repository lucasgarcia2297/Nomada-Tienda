import '../styles/Account.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              id="email"
              required
            />
          </section>
          <section>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              required
            />
          </section>
          <section className='btn-conteiner'>
            <button type="submit">Iniciar sesión</button>
            <p>¿No tenés cuenta aún?<Link to='/register'>Crear cuenta</Link></p>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Login