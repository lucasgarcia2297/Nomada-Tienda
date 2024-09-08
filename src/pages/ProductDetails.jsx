import { useParams } from "react-router-dom";
import { products as products } from '../mocks/products.json'
import { ProductCard } from "../Components/ProducCard";


function ProductDetails() {
  const { id } = useParams();
  const product = products.find(product => product.id == id);

  const similarProducts = products.filter((similarProduct) =>
    similarProduct.name !== product.name &&
    similarProduct.category === product.category ||
    similarProduct.brand === product.brand ||
    similarProduct.gender === product.gender
  ).slice(0, 4);

  return (
    <>
      <section>

        {product ? (
          <div className="conteiner-details">
            <h2>Producto: {product.name}</h2>
            <div className="conteiner-images">
              <ul>
                {product.images? product.images.map((image, index) => {
                  <li key={index}>
                    <div>
                      {image[0]}
                      imagen N°{index}

                    </div>
                  </li>
                }) : (<div>No contiene imagenes</div>)}
              </ul>
            </div>


          </div>
        )
          : (<div>Producto no encontrado</div>)}
      </section>
      <section className="section1">
        <h2>Productos similares</h2>
        <ul className="products-list">
          {similarProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ProductDetails;