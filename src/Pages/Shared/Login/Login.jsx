import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = ({ setAuthSystem }) => {

    const { login, user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(user?.email);

    const onSubmit = (data) => {
        const { email, password } = data
        login(email, password)
            .then(data => {
                console.log('working');
            })
    }

    return (
        <div className="min-h-[500px]">
            <div>
                <h1 className="text-center text-white text-3xl font-semibold pb-14">Welcome Back!</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                {/* ----email------ */}
                <div className="form-control outline-none">
                    <label>
                        <span className="text-white">Email</span>
                    </label>
                    <input {...register('email', { required: true })} type="email" placeholder="email" className="h-11 px-3 rounded-md outline-none shadow-lg" />
                    {errors.email && errors.email.type === 'required' && <h1 className="text-orange pt-1">please enter your email</h1>}
                </div>

                {/* .......password....... */}
                <div className="form-control outline-none mb-3">
                    <label >
                        <span className="text-white">Password</span>
                    </label>
                    <input {...register('password', { required: true })} type="text" placeholder="password" className="h-11 px-3 rounded-md shadow-lg outline-none" />
                    {errors.password && errors.password.type === 'required' && <h1 className="text-orange pt-1">please enter your password</h1>}
                </div>
                <button className="bg-orange w-full h-11 rounded-lg text-white text-lg shadow-lg">Login</button>
            </form>
            <h1 className="text-center text-white py-4">or log in with</h1>
            <div>
                <button className="bg-gradient w-full flex justify-center items-center h-11 rounded-lg shadow-lg text-white text-2xl gap-4">
                    <FaGoogle className=""></FaGoogle>
                    <p>Google</p>
                </button>
            </div>
            <div>
                <h1 className="text-white text-md text-center pt-6">New to GadgetGrid ?
                    <span onClick={() => setAuthSystem('register')} className="border-b-2 pe-2 pb-1 border-orange ps-1 cursor-pointer"> Register </span>
                </h1>
            </div>
        </div>
    );
};

export default Login;