import BenefitsSection from "./BenefitsSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";
import ImageGallery from "./ImageGallery";


const Home = () => {
    return (
        <div className="mt-[57px]">
            <HeroSection></HeroSection>
            <CategoriesSection></CategoriesSection>
            <FeaturedSection></FeaturedSection>
            <BenefitsSection></BenefitsSection>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;