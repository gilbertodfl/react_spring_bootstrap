import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import axios from 'axios'
import './styles.css';
import { Link ,useParams } from 'react-router-dom';
import { BASE_URL } from 'util/requests';
import { useState, useEffect } from 'react';

type  UrlParams = {
  productId: string; 
}
const ProductDetails = () => {

  const { productId} = useParams<UrlParams>();
  const [product, setProduct ] = useState<Product>();
 
 //useEffect( minhafunção lambida, [ objetos que quero "observar"]) 
useEffect( () => {
  axios.get( `${BASE_URL}/products/${productId}`)
  .then(response => {
      setProduct ( response.data );
 //     console.log( response.data)
  })
}, [productId]);
 
  
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
      °  Isto é um comentário de teste
      Pressione no code ctrl + alt + / e comece a escrever seu comentário
      
      {/* comentário 2  
        este é mais elegante, prefiro este modo*/}

°            O && aqui é necessário porque temos q garantir deu price foi carregado.
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
