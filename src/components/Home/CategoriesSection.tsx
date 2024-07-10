import { Link } from 'react-router-dom';
import strength from '../../assets/images/strength.png'
import cardio from '../../assets/images/cardio.png'
import accessories from '../../assets/images/accessories.jpg'

const CategoriesSection = () => {
    return (
      <div>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category: Strength */}
              <Link to="/products?category=strength" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
                  <img
                    src={strength}
                    alt="Strength"
                    className="w-[300px] h-64 object-cover mx-auto"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-2xl font-semibold">Strength</span>
                  </div>
                </div>
              </Link>

              {/* Category: Cardio */}
              <Link to="/products?category=cardio" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
                  <img
                    src={cardio}
                    alt="Cardio"
                    className="w-[250px] h-64  mx-auto"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-2xl font-semibold">Cardio</span>
                  </div>
                </div>
              </Link>

              {/* Category: Accessories */}
              <Link to="/products?category=accessories" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition duration-300">
                  <img
                    src={accessories}
                    alt="Accessories"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-2xl font-semibold">Accessories</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoriesSection;
