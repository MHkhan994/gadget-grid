import './Navbar.css'
import { useEffect, useState } from "react";
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
import Aos from 'aos';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [userOpen, setUserOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1000
        })
    }, [])


    return (
        <div data-aos="fade-down" className={`w-full bg-white relative z-40 shadow-md`}>
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
                            <FaUserCircle></FaUserCircle>
                            {userOpen && <AiFillCaretDown className='text-2xl rotate-180 top-5 absolute'></AiFillCaretDown>}
                        </button>

                    </ul>
                    {
                        userOpen && <div className='absolute flex justify-center gap-3 flex-col items-center right-6 -bottom-28 bg-gradient shadow-lg rounded-md h-32 w-40 z-60'>
                            <NavLink to={'/account'} className={(isActive) => isActive ? 'text-white' : ''}>Account</NavLink>
                            <NavLink to={'/login'} className={(isActive) => isActive ? 'text-white' : ''}>Login</NavLink>
                            <button className='bg-white rounded-md px-4 py-1 text-orange'>
                                Logout
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;