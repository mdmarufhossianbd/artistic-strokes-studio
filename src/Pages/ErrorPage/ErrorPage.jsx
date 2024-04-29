import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";

const ErrorPage = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <img src="../../assets/images/404.png" alt="" />
                <Link><button className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 mb-20 px-10 rounded-full py-2 text-white font-medium">Back to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;