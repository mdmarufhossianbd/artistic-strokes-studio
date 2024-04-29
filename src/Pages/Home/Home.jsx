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
                <CarftItem></CarftItem>
            </div>
            <div className="px-4 my-10">
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