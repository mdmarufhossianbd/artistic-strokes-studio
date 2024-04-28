import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { } from "firebase/auth/cordova";
import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Firebase/Firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    // Login with Email & Password
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("input data", email, password);
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast.success("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                error.message
                console.log("login error console", error.message);
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }

    // Login With Google
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }

    // Login with Github
    const handleGitHubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }


    return (
        <div className="lg:px-[300px] pt-10 pb-20 bg-[#e7f4f2]">
            <h2 className="text-3xl font-bold py-5 text-center">Login your account</h2>
            <p className="font-medium mb-5 text-center">Let's get started!</p>
            <div className="p-5">
                <form onSubmit={handleLogin} className="flex flex-col md:w-1/2 w-[90%] mx-auto">
                    <label className="text-lg font-medium py-2">Email</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none  focus:ring-0" type="email" placeholder="Enter your email" name="email" required />
                    <label className="text-lg font-medium py-2">Password</label>
                    <div className="relative">
                        <input className="bg-[#10a58f] w-full rounded text-xl py-2 pl-4 text-white placeholder:text-white focus:outline-none  focus:ring-0" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-[30%] right-4">
                            {showPassword ? <IoEyeOff /> : <IoEye />
                            }  </span>
                    </div>
                    <input className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded-full py-2 my-5 border border-[#fff] hover:border hover:border-[#10a58f] text-white font-medium text-xl hover:cursor-pointer" type="submit" value="Login" />
                    <ToastContainer />
                </form>
                <div className="flex flex-col md:w-1/2 w-[90%] mx-auto">
                    <div className="divider">OR</div>
                    <Link><button onClick={handleGoogleLogin} className="bg-[#fff] rounded-full py-2 my-2 text-black border border-[#10a58f] font-medium text-xl w-full hover:bg-[#10a58f] hover:text-white ">Continue with Google</button></Link>
                    <Link><button onClick={handleGitHubLogin} className="bg-[#4E4FEB] rounded-full py-2 my-2 text-white font-medium text-xl w-full hover:bg-[#10a58f]">Continue with GitHub</button></Link>
                    <p className="text-center mt-3">Don't have an account? <Link className="font-bold" to={'/register'}>Register</Link></p>
                </div>
            </div>
            <div className="pl-5">

                {/* <div className="w-1/3">
                    <img className="rounded w-full mt-16" src="/src/assets/images/login and register.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Login;