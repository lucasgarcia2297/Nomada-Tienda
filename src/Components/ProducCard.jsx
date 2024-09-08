import { Link } from 'react-router-dom';
import image from '../assets/images/default-image.png';
import '../styles/Home.css'

export function ProductCard({ product }) {
  return (
    <>
      <article className="product-card">
        <strong>{product.name}</strong>
        <img src={image} alt={product.name} />
        <p>${product.price}</p>
        <button className="btn-details"><Link to={`/products/${product.id}`}>Ver detalles</Link></button>
      </article>
    </>
  );
}