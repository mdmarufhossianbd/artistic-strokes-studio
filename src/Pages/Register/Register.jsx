import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { registerUser } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState("");
    console.log(registerError);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {name, email, password};
        // console.log(user);

        // password Validation

        if (password.length < 6) {
            const toastPasswordError = () => toast.error("Password at least 6 charaters.");
            setRegisterError(toastPasswordError());
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            const toastPasswordError = () => toast.error("Please input at least one small later.");
            setRegisterError(toastPasswordError());
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            const toastPasswordError = () => toast.error("Please input at least one Capital later.");
            setRegisterError(toastPasswordError());
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            const toastPasswordError = () => toast.error("Please input at least one number.");
            setRegisterError(toastPasswordError());
            return;
        }
        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])\S+$/.test(password)) {
            const toastPasswordError = () => toast.error("Please input special charaters.");
            setRegisterError(toastPasswordError());
            return;
        }

        registerUser(email, password)
            .then(result => {
                result.user
                if (result.user) {
                    const toastMessage = () => toast.success("Your account Create Successfully");
                    toastMessage();
                }
            })
            .catch(error => {
                error.message
                if (error.message) {
                    setRegisterError(error.message)
                    const toastMessage = () => toast.error("This email already use or invalid email.");
                    toastMessage();
                }
            })
    }
    return (
        <div className="lg:px-[300px] flex items-center gap-5 pt-10 pb-20 bg-[#e7f4f2]">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold py-5 text-center">Create an account</h2>
                <p className="font-medium mb-5 text-center">Let's get started!</p>
                <form onSubmit={handleRegister} className="flex flex-col w-[90%]">
                    <label className="text-lg font-medium py-2">Name</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="text" name="name" required />
                    <label className="text-lg font-medium py-2">Email</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="email" name="email" required />
                    <label className="text-lg font-medium py-2">Password</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="password" name="password" required />
                    <input className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded py-2 my-5 text-white font-medium text-xl hover:cursor-pointer" type="submit" value="Register" />
                    <ToastContainer />
                </form>
                {/* <div className="flex flex-col w-[90%]">
                    <div className="divider">OR</div>
                    <Link><button className="bg-[#10a58f] rounded py-2 my-2 text-white font-medium text-xl w-full">Continue with Google</button></Link>
                    <Link><button className="bg-[#10a58f] rounded py-2 text-white font-medium text-xl w-full">Continue with GitHub</button></Link>
                </div> */}
            </div>
            <div className="w-1/2">
                <img className="rounded w-full " src="/src/assets/images/login and register.png" alt="" />
            </div>
        </div>
    );
};

export default Register;