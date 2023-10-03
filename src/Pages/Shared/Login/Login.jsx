import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="h-[500px]">
            <div>
                <h1 className="text-center text-white text-3xl font-semibold">Welcome Back!</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center h-[80%] gap-6">
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
        </div>
    );
};

export default Login;