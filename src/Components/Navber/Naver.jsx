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
            <div>
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/register'}>                <button>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Naver;