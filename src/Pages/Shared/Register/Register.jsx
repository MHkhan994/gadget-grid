import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'
import { AuthContext } from "../../../Providers/AuthProvider";

import photoIcon from '../../../assets/photoUploadIcon.png'
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import UseModalClose from "../../../Hooks/UseModalClose";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = ({ setAuthSystem }) => {

    const { createUser } = useContext(AuthContext)
    const [imageFile, setImageFile] = useState('')
    const [imgLink, setImgLink] = useState('')
    const { modalClose } = UseModalClose()
    const [passError, setPassError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const photoInputRef = useRef()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, confirmPassword } = data

        setPassError('')

        if (password !== confirmPassword) {
            setPassError("Password does't match!")
        }

        const formData = new FormData()
        formData.append("image", imageFile)
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageApi}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                setImgLink(imgData.data.display_url);
            })
            .catch(error => {
                console.log(error);
            })
        createUser(email, password)
            .then(data => {
                updateProfile(data.user, {
                    displayName: name,
                    photoURL: imgLink || ''
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Welcome',
                            text: `${data.user.displayName}`,
                        })
                        modalClose()
                    })
            })
            .catch(error => {
                console.log(error);
                if (error.message.includes('auth/email-already-in-use')) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Account already exist. Try loggin in.',
                    })
                    modalClose()
                }
            })
    }

    const handleImageFile = () => {
        photoInputRef.current.click()
    }

    const handleImageInputChange = (e) => {
        setImageFile(e.target.files[0])
    }


    return (
        <div className="h-[600px]">
            <div>
                <h1 className="text-center text-white text-3xl font-semibold pb-5">Create Account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                {/* ----name------ */}
                <div className="form-control outline-none">
                    <label>
                        <span className="text-white">Name</span>
                    </label>
                    <input {...register('name', { required: true })} type="text" placeholder="Your Name" className="h-11 px-3 rounded-md outline-none shadow-lg" />
                    {errors.name && errors.name.type === 'required' && <h1 className="text-orange pt-1">please enter your name.</h1>}
                </div>

                {/* ----email------ */}
                <div className="form-control outline-none">
                    <label>
                        <span className="text-white">Email</span>
                    </label>
                    <input {...register('email', { required: true })} type="email" placeholder="email" className="h-11 px-3 rounded-md outline-none shadow-lg" />
                    {errors.email && errors.email.type === 'required' && <h1 className="text-orange pt-1">please enter your email.</h1>}
                </div>

                {/* .......password....... */}
                <div className="form-control outline-none">
                    <label >
                        <span className="text-white">Password</span>
                    </label>
                    <div className="relative">
                        <input {...register('password', { required: true })} type={`${showPass ? 'text' : 'password'}`} placeholder="password" className="h-11 px-3 w-full rounded-md shadow-lg outline-none" />
                        {/* show pass buttons */}
                        <>
                            {showPass ?
                                <BsEyeFill onClick={() => setShowPass(!showPass)} className="absolute right-2 text-lg cursor-pointer text-blue bottom-[13px]"></BsEyeFill>
                                :
                                <BsEyeSlashFill onClick={() => setShowPass(!showPass)} className="absolute right-2 text-lg cursor-pointer text-orange bottom-[13px]"></BsEyeSlashFill>
                            }
                        </>
                    </div>

                    {errors.password && errors.password.type === 'required' && <h1 className="text-orange pt-1">please enter your password.</h1>}
                </div>

                {/* -------confirm Password------- */}
                <div className="form-control outline-none">
                    <label >
                        <span className="text-white">Confirm Password</span>
                    </label>
                    <div className="relative">
                        <input {...register('confirmPassword', { required: true })} type={`${showConfirmPass ? 'text' : 'password'}`} placeholder="password" className="h-11 w-full px-3 rounded-md shadow-lg outline-none" />

                        {/* show pass buttons */}
                        <>
                            {showConfirmPass ?
                                <BsEyeFill onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-2 text-lg cursor-pointer text-blue bottom-[13px]"></BsEyeFill>
                                :
                                <BsEyeSlashFill onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-2 text-lg cursor-pointer text-orange bottom-[13px]"></BsEyeSlashFill>}
                        </>
                    </div>

                    {errors.confirmPassword && errors.confirmPassword.type === 'required' && <h1 className="text-orange pt-1">please confirm password.</h1>}
                </div>

                <div onClick={handleImageFile} className="cursor-pointer my-2">
                    <div className="flex gap-2 items-center border-2 w-fit px-2 py-[3px] rounded-lg">
                        <img src={photoIcon} className="h-9" alt="" />
                        <p className="text-white">Upload Profile Picture</p>
                    </div>
                    <input onChange={handleImageInputChange} ref={photoInputRef} type="file" accept="image/*" className="hidden" />
                </div>
                {
                    imageFile && <div className="h-48 relative flex justify-center items-center w-full">
                        <img className="h-44 object-cover w-44 rounded-full" src={URL.createObjectURL(imageFile)} alt="" />
                        <button onClick={() => setImageFile('')} type="button" className="absolute top-0 right-3">
                            <AiOutlineClose className="text-white text-2xl rounded-sm bg-orange"></AiOutlineClose>
                        </button>
                    </div>
                }
                <button className="bg-orange w-full h-11 rounded-lg text-white text-lg shadow-lg">Register</button>
            </form>
            <h1 className="text-center text-white py-4">or log in with</h1>
            <div>
                <button className="bg-gradient border w-full flex justify-center items-center h-11 rounded-lg shadow-lg text-white text-2xl gap-4">
                    <FaGoogle className=""></FaGoogle>
                    <p>Google</p>
                </button>
            </div>
            <div>
                <h1 className="text-white text-md text-center pt-6">Already have an account ?
                    <span onClick={() => setAuthSystem('login')} className="border-b-2 pe-2 pb-1 border-orange ps-1 cursor-pointer">Login</span>
                </h1>
            </div>
        </div>
    );
};

export default Register;