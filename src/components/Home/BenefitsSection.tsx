
import expert from '../../assets/images/expertTraine.jpeg'
import wideVarity from '../../assets/images/wideVarity.jpg'
const BenefitsSection = () => {
     const benefits = [
       {
         title: 'High-Quality Equipment',
         description:
           'Our products are made from premium materials to ensure durability and performance.',
         image: 'https://via.placeholder.com/150',
       },
       {
         title: 'Expert Support',
         description:
           'Get advice and tips from fitness experts to maximize your training results.',
         image: expert,
       },
       {
         title: 'Affordable Prices',
         description:
           'We offer competitive pricing on all our products to help you get the best value.',
         image: 'https://via.placeholder.com/150',
       },
       {
         title: 'Wide Variety',
         description:
           'Choose from a wide range of products to meet all your fitness needs.',
         image: wideVarity,
       },
     ];
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Benefits of Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default BenefitsSection;