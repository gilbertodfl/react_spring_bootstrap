import ProductCard from 'components/ProductCard';
//import './styles.css';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const product: Product = {
    id: 2,
    name: 'Smart TV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    price: 2190.0,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    date: '2020-07-14T10:00:00Z',
    categories: [
      {
        id: 1,
        name: 'Livros',
      },
      {
        id: 3,
        name: 'Computadores',
      },
    ],
  };

  return (
    <>
      <div className="container md-y4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
