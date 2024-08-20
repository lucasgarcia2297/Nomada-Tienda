import { useState } from "react";
import '../styles/Home.css';
import { products as initialProducts } from '../mocks/products.json';
import image from '../assets/images/default-image.png';
import { Banner } from '../Components/Banner.jsx';
import { Link } from "react-router-dom";


function Home() {
  const [products, setProducts] = useState(initialProducts);
 

  return (
    <main>
      <Banner/>
      
      <section className="section1">
        <h2>NUEVOS PRODUCTOS</h2>
        <ul className="products-list">
          {products.map((product) => (
            <li key={product.id}>
              <article className="product-card">
                <strong>{product.name}</strong>
                <img src={image} alt={product.name} />
                <p>${product.price}</p>
                <button className="btn-details"><Link to={`/products/${product.id}`}>Ver detalles</Link></button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
