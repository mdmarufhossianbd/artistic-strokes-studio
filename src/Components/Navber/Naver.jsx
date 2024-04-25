import { NavLink } from "react-router-dom";


const Naver = () => {

    const links = <>
    
    <NavLink to={'/'}>Home</NavLink>
    
    </>

    return (
        <div>
            {links}
        </div>
    );
};

export default Naver;