import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navber = () => {
    const { user, logout } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }

    const links = <>
        <NavLink className='py-2' to={'/'}>Home</NavLink>
        <NavLink className='py-2' to={'/painting-and-drawing'}>All Art & Craft</NavLink>
        <NavLink className='py-2' to={'/add-painting-and-drawing'}>Add Art & Craft</NavLink>
        {
            user ? <NavLink className='py-2' to={'/my-paintings-and-drawings'}>My Art & Craft</NavLink> : ''
        }
    </>

    return (
        <div className="xl:px-[300px] lg:px-[50px] md:px-0 px-4 py-3 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500">
            <div className="navbar flex justify-between items-center">
                <div className="dropdown z-10 -ml-5 lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {links}
                    </ul>
                </div>
                <div>
                    <Link className="font-bold text-2xl hover:text-[#fff]" to={'/'}>AS Studio</Link>
                </div>
                <div className="list-none font-semibold lg:flex gap-4 hidden">
                        <li><Link className="hover:bg-[#5245ED] hover:text-white rounded py-2 px-3" to={'/'}>Home</Link></li>
                        <li><Link className="hover:bg-[#5245ED] hover:text-white rounded py-2 px-3" to={'/painting-and-drawing'}>All Art & Craft</Link></li>
                        <li><Link className="hover:bg-[#5245ED] hover:text-white rounded py-2 px-3" to={'/add-painting-and-drawing'}>Add Art & Craft</Link></li>
                        {
                            user ? <li><Link className="hover:bg-[#5245ED] hover:text-white rounded py-2 px-3" to={'/my-paintings-and-drawings'}>My Art & Craft</Link>
                            </li> : ""
                        }
                    </div>
                <div className="lg:ml-4">

                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" flex gap-4" >
                                <div className="w-10 rounded-full tooltip tooltip-left" data-tip={user.displayName}>
                                    <img className="rounded-full border border-[#000]" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>

                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-center rounded-full w-52 absolute z-10">
                                <Link onClick={handleLogOut}><button className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 text-white py-2 px-16 rounded-full ">Logout</button></Link>
                            </ul>
                        </div>
                            : <div className="flex gap-2 -mr-8"><Link to={"/login"}><button className="bg-[#5245ED] text-white py-2 px-6 rounded hover:bg-[#100A55]">Login</button></Link>
                                <Link to={"/register"}><button className="bg-[#5245ED] text-white py-2 px-6 rounded hover:bg-[#100A55]">Register</button></Link>
                            </div>
                    }
                    <label className="swap swap-rotate ml-10">                        
                        <input type="checkbox" onClick={handleToggle} checked={theme == "light" ? false : true} className="theme-controller" value="synthwave" />
                        
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>

                </div>
                
            </div>

        </div>
    );
};

export default Navber;