import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Naver from '../Components/Navber/Naver';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Naver></Naver>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;