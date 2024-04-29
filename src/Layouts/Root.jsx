import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navber from '../Components/Navber/Navber';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navber></Navber>
            {
                navigation.state === "loading" ?
                <div className='text-center'>
                    <span id='loading-spinner' className="loading loading-spinner my-20 loading-lg"></span>
                </div> :
                <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Root;