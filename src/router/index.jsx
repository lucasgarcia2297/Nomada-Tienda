import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import  Home  from '../pages/Home';
import  ProductDetails  from '../pages/ProductDetails';
import  Login  from '../pages/Login';
import  Register  from '../pages/Register';
import  Cart  from '../pages/Cart';
import  NotFound  from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<NotFound/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        children: [{
          path: ':id',
          element: <ProductDetails />
        }]
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);
