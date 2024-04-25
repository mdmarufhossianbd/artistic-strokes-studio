import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { } from "firebase/auth/cordova";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Firebase/Firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;


    // Login with Email & Password
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("input data",email, password);
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast.success("Your account login Successfully");
                    toastMessage();
                    // navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                error.message
                console.log("login error console",error.message);
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }

    // Login With Google
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result=> {
            if(result.user){                
                const toastMessage = () => toast("Your account login Successfully");
                    toastMessage();
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
        <div className="lg:px-[300px] flex items-center gap-5 pt-10 pb-20 bg-[#e7f4f2]">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold py-5 text-center">Login your account</h2>
                <p className="font-medium mb-5 text-center">Let's get started!</p>
                <form onSubmit={handleLogin} className="flex flex-col w-[90%]">                    
                    <label className="text-lg font-medium py-2">Email</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="email" name="email" required />
                    <label className="text-lg font-medium py-2">Password</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="password" name="password" required />
                    <input className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded py-2 my-5 text-white font-medium text-xl hover:cursor-pointer" type="submit" value="Login" />
                    <ToastContainer/>
                </form>
                <div className="flex flex-col w-[90%]">
                <div className="divider">OR</div>
                <Link><button onClick={handleGoogleLogin} className="bg-[#10a58f] rounded py-2 my-2 text-white font-medium text-xl w-full">Continue with Google</button></Link>
                
                </div>
            </div>
            <div className="w-1/2">
                <img className="rounded w-full mt-16" src="/src/assets/images/login and register.png" alt="" />
            </div>
        </div>
    );
};

export default Login;