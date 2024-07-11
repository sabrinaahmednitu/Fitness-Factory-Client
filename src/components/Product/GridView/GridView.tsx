
import { Link } from 'react-router-dom';

const GridView = ({ products }) => {

  return (
    <div>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-[50px]">
        {products?.map((product) => {
          return (
            <div key={product._id}>
              <Link to={`/products/${product._id}`}>
                <div>
                  <figure className="product-figure">
                    <img src={product.images} alt={product.name} />
                  </figure>
                  <div className="card-data card-data-flex gap-5">
                    <h1 className='font-bold'>{product.name}</h1>
                    <p>price: {product.price}$</p>
                    <p>{ product.description.slice(0,94)}....</p>
                  </div>
                  <figcaption className="category">
                    {product.category}
                  </figcaption>

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
