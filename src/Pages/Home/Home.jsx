import CarftItem from "../../Components/CarftItem/CarftItem";
import Category from "../../Components/Category/Category";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <div className="bg-[#f7f8fc]">
            <Slider></Slider>            
            </div>
            <div className="px-4 my-10">
                <Category></Category>
            </div>
            <div className="my-10 px-4">
                <CarftItem></CarftItem>
            </div>
        </div>
    );
};

export default Home;