import { useParams } from "react-router-dom";
import {products as products} from '../mocks/products.json'

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(product => product.id == id);  
  return (
      <div>
          {product ? (<h1>Producto: {product.name}</h1>) : (<div>No encontrado</div>)}
      </div>
  );
}

export default ProductDetails;