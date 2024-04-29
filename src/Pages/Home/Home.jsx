import CarftItem from "../../Components/CarftItem/CarftItem";
import Category from "../../Components/Category/Category";
import MoreExplore from "../../Components/MoreExplore/MoreExplore";
import OurArtist from "../../Components/OurArtist/OurArtist";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <div className="bg-[#f7f8fc]">
                <Slider></Slider>
            </div>
            <div className="my-10 px-4">
                <h2 className="text-3xl font-semibold text-center py-5">Latest Products</h2>
                <p className="text-center mb-10">Check out our latest selection of captivating artwork and drawing supplies, curated to inspire creativity and elevate your artistic journey!</p>
                <CarftItem></CarftItem>
            </div>
            <div className="px-4 my-10">
                <h2 className="text-center font-medium text-3xl my-10">Choose your category</h2>
                <p className="text-center mb-10">Explore our diverse range of art supplies and drawing essentials in our expansive category section.</p>
                <Category></Category>
            </div>
            <div>
                <OurArtist></OurArtist>
            </div>
            <div>
                <MoreExplore></MoreExplore>
            </div>
        </div>
    );
};

export default Home;