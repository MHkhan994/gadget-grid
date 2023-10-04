import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
import Aos from 'aos';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { AiOutlineClose } from 'react-icons/ai'
import Register from '../Register/Register';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const [userOpen, setUserOpen] = useState(false)
    const [authSystem, setAuthSystem] = useState('login')
    const { user, logOut } = useContext(AuthContext)

    const modalClose = () => {
        const modal = document.getElementById('my_modal_4')
        modal.close()
    }

    console.log(user?.photoURL);

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1000
        })
    }, [])

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.warn('Your logged out from this device', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    return (
        <div data-aos="fade-down" className={`w-full bg-white relative z-40`}>
            <div className='z-10 bg-white py-4'>
                <div className="my-container flex justify-between">
                    <img src="./logo.png" className="h-12" alt="" />
                    <div data-aos-delay="150" data-aos="fade-down" className="flex items-center">
                        <div className="input-group border-orange border rounded-lg h-10">
                            <input type="text" placeholder="Search gadgets" className="px-4 lg:w-72 focus:outline-none" />
                            <button className="bg-gradient text-white h-[39px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <ul className="flex gap-6 items-center text-2xl">
                        <button data-aos-delay="60" data-aos="fade-down" className="text-blue relative">
                            <BsCart></BsCart>
                            <div className="absolute h-5 w-5 bg-orange rounded-full -top-4 -right-3">
                                <p className="text-sm text-white">1</p>
                            </div>
                        </button>
                        <button data-aos-delay="150" data-aos="fade-down" className="text-blue relative">
                            <FaHeart></FaHeart>
                            <div className="absolute h-5 w-5 bg-orange rounded-full -top-4 -right-3">
                                <p className="text-sm text-white">1</p>
                            </div>
                        </button>
                        <button onClick={() => setUserOpen(!userOpen)} data-aos-delay="200" data-aos="fade-down" className="text-blue">
                            {
                                !user || !user.photoURL ?
                                    <FaUserCircle></FaUserCircle>
                                    :
                                    <img src={user?.photoURL} className='h-7 w-7 me-2 object-cover rounded-full'></img>
                            }
                            {userOpen && <AiFillCaretDown className='text-2xl rotate-180 top-5 absolute'></AiFillCaretDown>}
                        </button>

                    </ul>
                    {
                        userOpen && <div className='absolute flex justify-center gap-3 flex-col items-center pb-3 right-6 top-16 bg-gradient shadow-lg rounded-md h-40 w-40 z-60'>
                            <h1 className='text-orange text-center'>{user?.displayName}</h1>
                            <NavLink to={'/dashboard'} className={(isActive) => isActive ? 'text-white' : ''}>Dashboard</NavLink>
                            {
                                !user && <button className='text-white' onClick={() => {
                                    document.getElementById('my_modal_4').showModal()
                                    setAuthSystem('login')
                                }}>Login</button>
                            }
                            <button onClick={handleLogout} className='bg-white rounded-md px-4 py-1 text-orange'>
                                Logout
                            </button>
                        </div>

                    }
                </div>
                {/* ------------login register modal-------------- */}
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box my-modal lg:w-[70%] bg-[#6917e388] relative backdrop-blur-[10px] shadow-xl shadow-[#a408c769]">
                        <div>
                            {
                                authSystem === 'login' ?
                                    <Login setAuthSystem={setAuthSystem} setUserOpen={setUserOpen}></Login>
                                    :
                                    <Register setAuthSystem={setAuthSystem} setUserOpen={setUserOpen}></Register>
                            }
                        </div>
                        <button className='absolute top-0 right-0 bg-orange p-1 rounded-bl-xl' type="button" onClick={modalClose}>
                            <AiOutlineClose className='text-white text-2xl'></AiOutlineClose>
                        </button>
                    </div>
                </dialog>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Navbar;