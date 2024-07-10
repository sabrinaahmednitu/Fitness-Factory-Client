
import { Link } from 'react-router-dom';

import './GridView.css';
import { useGetProductsQuery } from '@/redux/Api/baseApi';

const GridView = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) {
      return <p className="text-2xl text-center text-red-500">Loading .... </p>;
    }
  return (
    <div>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 mt-[100px]">
        {data?.map((product) => {
          return (
            <div>
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