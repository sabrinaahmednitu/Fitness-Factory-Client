import heroSection from '../../assets/images/heroSection.jpg' 
const HeroSection = () => {
    return (
      <div>
        <div className="hero-section relative bg-gray-100 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gray-900 opacity-75 z-0" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8 flex items-center justify-between py-20 lg:py-32">
            <div className="max-w-lg lg:max-w-xl text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8">
                Welcome to Fitness Factory
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">
                Your destination for fitness equipment and gear.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img
                src={heroSection} // Replace with your actual image path
                alt="Fitness Factory"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;