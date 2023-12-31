import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import UseModalClose from "../../../Hooks/UseModalClose";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

const Login = ({ setAuthSystem, setUserOpen }) => {

    const { modalClose } = UseModalClose()
    const { login, user, googleLogin, loading } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const [authError, setAuthError] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    console.log(user);

    const onSubmit = (data) => {
        setAuthError('')
        const { email, password } = data
        login(email, password)
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back',
                    text: `${data?.user?.displayName}`,
                })
                modalClose()
                reset()
                setUserOpen(false)
            })
            .catch(error => {
                if (error.message.includes('invalid-login-credentials')) {
                    setAuthError("Wrong email or password. Try again")
                }
            })
    }

    // ===========google login===========
    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const user = res.user
                if (user) {
                    const newUser = {
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL || '',
                        role: 'user'
                    }
                    axios.post('http://localhost:5000/users', newUser)
                        .then(res => {
                            console.log(res.data);
                        })
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back',
                    text: `${res?.user?.displayName}`,
                })
                modalClose()
                setUserOpen(false)
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Opps!',
                    text: `sorry something went wrong. please try agian later`,
                })
                modalClose()
                setUserOpen(false)
                console.log(error);
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
                    {
                        authError && <h1 className="text-orange pt-1">{authError}</h1>
                    }
                </div>

                {/* .......password....... */}
                <div className="form-control outline-none mb-3">
                    <label >
                        <span className="text-white">Password</span>
                    </label>
                    <div className="relative">
                        <input {...register('password', { required: true })} type={showPass ? 'text' : 'password'} placeholder="password" className="h-11 w-full px-3 rounded-md shadow-lg outline-none" />

                        {/* show pass buttons */}
                        <>
                            {showPass ?
                                <BsEyeFill onClick={() => setShowPass(!showPass)} className="absolute right-2 text-lg cursor-pointer text-blue bottom-[13px]"></BsEyeFill>
                                :
                                <BsEyeSlashFill onClick={() => setShowPass(!showPass)} className="absolute right-2 text-lg cursor-pointer text-orange bottom-[13px]"></BsEyeSlashFill>
                            }
                        </>
                    </div>
                    {errors.password && errors.password.type === 'required' && <h1 className="text-orange pt-1">please enter your password</h1>}
                    {
                        authError && <h1 className="text-orange pt-1">{authError}</h1>
                    }
                </div>
                {
                    loading ?
                        <button type="button" className="bg-orange w-full flex justify-center items-center h-11 rounded-lg text-white text-lg shadow-lg">
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="38"
                                visible={true}
                            />
                        </button>
                        :
                        <button className="bg-orange w-full flex justify-center items-center h-11 rounded-lg text-white text-lg shadow-lg">
                            Login
                        </button>
                }
            </form>
            <h1 className="text-center text-white py-4">or log in with</h1>
            <div>
                <button onClick={handleGoogleLogin} className="bg-gradient w-full flex justify-center items-center h-11 rounded-lg shadow-lg text-white text-2xl gap-4">
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