import './Navbar/Navbar.css'
import { useContext, useEffect, useState } from "react";
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs'
import { CgSearch } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import Aos from 'aos';
import { AiFillCaretDown } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const MobileNavbar = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1000
        })
    }, [])

    const [serachOpen, setSearchOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)
    const [authSystem, setAuthSystem] = useState('login')
    const { user, logOut } = useContext(AuthContext)

    const modalClose = () => {
        const modal = document.getElementById('my_modal_3')
        modal.close()
    }

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
        <div className='bg-white fixed top-0 w-full shadow-lg z-10'>
            < div className="my-container flex justify-between bg-white py-3">
                <button className='text-2xl text-orange'>
                    <HiMiniBars3BottomLeft></HiMiniBars3BottomLeft>
                </button>
                <img src="./logo.png" className="lg:h-12 h-10" alt="" />
                <div data-aos-delay="150" data-aos="fade-down" className="lg:flex items-center hidden z-20">
                    <div className="input-group border-purple-700 border rounded-lg h-10">
                        <input type="text" placeholder="Search gadgets" className="px-4 lg:w-72 focus:outline-none" />
                        <button className="bg-gradient text-white h-[39px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <ul className="flex gap-3 items-center text-[26px]">
                    <button onClick={() => {
                        setSearchOpen(!serachOpen)
                        setUserOpen(false)
                    }} data-aos-delay="60" data-aos="fade-down" className="text-blue lg:hidden">
                        <CgSearch className="text-[1.6rem]"></CgSearch>
                    </button>
                    <button data-aos-delay="60" data-aos="fade-down" className="text-blue relative">
                        <BsCart></BsCart>
                        <div className="absolute h-4 w-4 bg-orange rounded-full -top-4 -right-3">
                            <p className="text-xs text-white">1</p>
                        </div>
                    </button>
                    <button data-aos-delay="150" data-aos="fade-down" className="text-blue relative">
                        <FaHeart></FaHeart>
                        <div className="absolute h-4 w-4 bg-orange rounded-full -top-4 -right-3">
                            <p className="text-xs text-white">1</p>
                        </div>
                    </button>
                    <button onClick={() => {
                        setUserOpen(!userOpen)
                        setSearchOpen(false)
                    }} data-aos-delay="200" data-aos="fade-down" className="text-blue">
                        {
                            !user || !user.photoURL ?
                                <FaUserCircle></FaUserCircle>
                                :
                                <img src={user?.photoURL} className='h-7 w-7 me-2 object-cover rounded-full'></img>
                        }
                        {userOpen && <AiFillCaretDown className='text-2xl pe-[3px] rotate-180 top-5 absolute'></AiFillCaretDown>}
                    </button>
                </ul>
            </div>
            {
                userOpen && <div className='absolute flex justify-center gap-3 flex-col items-center pb-3 right-3 top-14 bg-gradient shadow-lg rounded-md h-40 w-40 z-60'>
                    <h1 className='text-orange text-center'>{user?.displayName}</h1>
                    <NavLink to={'/account'} className={(isActive) => isActive ? 'text-white' : ''}>Account</NavLink>
                    {
                        !user && <button className='text-white' onClick={() => {
                            document.getElementById('my_modal_3').showModal()
                            setAuthSystem('login')
                        }}>Login</button>
                    }
                    <button onClick={handleLogout} className='bg-white rounded-md px-4 py-1 text-orange'>
                        Logout
                    </button>
                </div>

            }
            <div className={`fixed flex bg-white shadow-lg items-center transition-all top-[55px] pe-4 bg-gray-40 z-40 border w-full ${serachOpen ? "left-0" : '-right-full'}`}>
                <input type="text" placeholder="Search gadgets" className="px-4 py-2 w-full focus:outline-none" />
                <CgSearch className='text-2xl'></CgSearch>
            </div>


            {/* ------------login register modal-------------- */}
            <dialog id="my_modal_3" className="modal max-h-screen overflow-y-auto">
                <div className="modal-box my-modal my-container bg-[#6917e388] relative backdrop-blur-[10px] shadow-xl shadow-[#a408c769]">
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
    );
};

export default MobileNavbar;