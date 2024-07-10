import CategoriesSection from "./CategoriesSection";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";


const Home = () => {
    return (
        <div className="mt-[57px]">
            <HeroSection></HeroSection>
            <CategoriesSection></CategoriesSection>
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;