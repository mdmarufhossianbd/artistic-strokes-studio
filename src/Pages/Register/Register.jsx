import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, password};
        console.log(user);
    }
    return (
        <div className="flex items-center gap-5 p-5 bg-[#e7f4f2]">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold py-5">Create an account</h2>
                <p className="font-medium mb-5">Let's get started!</p>
                <form onSubmit={handleRegister} className="flex flex-col w-[90%]">
                    <label className="text-lg font-medium py-2">Name</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="text" name="name" required />
                    <label className="text-lg font-medium py-2">Email</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="email" name="email" required />
                    <label className="text-lg font-medium py-2">Password</label>
                    <input className="bg-[#10a58f] rounded text-xl py-2 pl-4 text-[#2a2824] focus:outline-none  focus:ring-0" type="password" name="password" required />
                    <input className="bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 rounded py-2 my-5 text-white font-medium text-xl hover:cursor-pointer" type="submit" value="Register" />
                </form>
                <div className="flex flex-col w-[90%]">
                <div className="divider">OR</div>
                <Link><button className="bg-[#10a58f] rounded py-2 my-2 text-white font-medium text-xl w-full">Continue with Google</button></Link>
                <Link><button className="bg-[#10a58f] rounded py-2 text-white font-medium text-xl w-full">Continue with GitHub</button></Link>
                </div>
            </div>
            <div className="w-1/2">
                <img className="rounded w-full " src="/src/assets/images/login and register.png" alt="" />
            </div>
        </div>
    );
};

export default Register;