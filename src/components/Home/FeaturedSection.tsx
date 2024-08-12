import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FeaturedSection = ({ products }) => {
    const { featured_products } = useSelector((state) => state.filter);
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured_products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-md group hover:shadow-lg transition duration-300"
            >
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-4">{product.price}</p>
                <Link
                  to={`/products/${product._id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
