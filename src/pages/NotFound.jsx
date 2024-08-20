import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>  Error 404: Not Found </h1>
        <p>{error.statusText || error.message}</p>
        <Link to='/'>Volver al inicio</Link>

      </div>
    );
  }
  else{
    return <div>Oops</div>;
  }
}

export default NotFound;