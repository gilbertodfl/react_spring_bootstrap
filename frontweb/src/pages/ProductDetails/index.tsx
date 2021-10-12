import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import axios from 'axios'
import './styles.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'util/requests';
import { useState, useEffect } from 'react';
const ProductDetails = () => {

  const [product, setProduct ] = useState<Product>();
  
useEffect( () => {
  axios.get( BASE_URL+"/products/1")
  .then(response => {
      setProduct ( response.data );
      console.log( response.data)
  })
}, []);
 
  
  return (
    <div className="product-details-container ">
      <div className=" product-details-card">
      <Link to="/products/">
        <div className="go-back-container ">
          <ArrowIcon />
          <h2>voltar</h2>
        </div>
        </Link>
      </div>
      <div className="row base-card ">
        <div className="col-xl-6">
        
            <div className="img-container">
              <img
                src={product?.imgUrl}
                alt={product?.name}
              />
            </div>
         
          <div className="name-price-container">
            <h1>{product?.name}</h1>
            { product && <ProductPrice price={product?.price} />} 
          </div>
        </div>
        <div className="col-xl-6">
          <div className="description-container">
            <h2>Descrição do Produto</h2>
            <p>
            {product?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
