
import { Link } from 'react-router-dom';
import './GridView.css';

const GridView = ({ products }) => {
  return (
    <div>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 mt-[100px]">
        {products?.map((product) => {
          return (
            <div key={product._id}>
              <Link to={`/singleProduct/${product._id}`}>
                <div className="card">
                  <figure className="product-figure">
                    <img src={product.images} alt={product.name} />
                    <figcaption className="category">
                      {product.category}
                    </figcaption>
                  </figure>
                  <div className="card-data card-data-flex">
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridView;
