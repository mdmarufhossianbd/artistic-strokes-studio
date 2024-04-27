import Category from "../../Components/Category/Category";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <div className="bg-[#f7f8fc]">
            <Slider></Slider>            
            </div>
            <div>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;