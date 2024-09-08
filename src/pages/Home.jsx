import { useState } from "react";
import '../styles/Home.css';
import { products as initialProducts } from '../mocks/products.json';
import { Banner } from '../Components/Banner.jsx';
import { ProductCard } from "../Components/ProducCard.jsx";

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
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
