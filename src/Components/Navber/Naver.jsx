import { Link, NavLink } from "react-router-dom";


const Naver = () => {

    const links = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Our All Painting</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>

    </>

    return (
        <div className="max-w-7xl mx-auto flex justify-between py-5 bg-">
            <h2>Artistic Strokes Studio</h2>
            <div className="flex gap-4">
                {links}
            </div>
            <div className="flex gap-4">
                <Link to={'/login'}><button className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded py-2 px-5 text-white font-medium text-xl hover:cursor-pointer">Login</button></Link>
                <Link to={'/register'}>                <button className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded py-2 px-5 text-white font-medium text-xl hover:cursor-pointer">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Naver;