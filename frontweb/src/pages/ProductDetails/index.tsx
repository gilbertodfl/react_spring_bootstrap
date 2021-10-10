import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
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
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="nome do produto"
              />
            </div>
         
          <div className="name-price-container">
            <h1>Nome Produto</h1>
            <ProductPrice price={1234.56} />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="description-container">
            <h2>Descrição do Produto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              cupiditate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
