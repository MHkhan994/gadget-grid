import './Navbar.css'
import { useEffect, useState } from "react";
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs'
import { CgSearch } from 'react-icons/cg'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import Aos from 'aos';
import { AiFillCaretDown } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1000
        })
    }, [])

    const [serachOpen, setSearchOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)

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
                        <FaUserCircle></FaUserCircle>
                        {userOpen && <AiFillCaretDown className='text-2xl pe-[3px] rotate-180 top-4 absolute'></AiFillCaretDown>}
                    </button>
                </ul>
            </div>
            {
                userOpen && <div className='absolute flex justify-center gap-3 flex-col items-center right-2 -bottom-[116px] bg-gradient shadow-lg rounded-md h-32 w-40 z-60'>
                    <NavLink to={'/account'} className={(isActive) => isActive ? 'text-white' : ''}>Account</NavLink>
                    <NavLink to={'/login'} className={(isActive) => isActive ? 'text-white' : ''}>Login</NavLink>
                    <button className='bg-white rounded-md px-4 py-1 text-orange'>
                        Logout
                    </button>
                </div>
            }
            <div className={`fixed flex bg-white shadow-lg items-center transition-all top-[55px] pe-4 bg-gray-40 z-40 border w-full ${serachOpen ? "left-0" : '-right-full'}`}>
                <input type="text" placeholder="Search gadgets" className="px-4 py-2 w-full focus:outline-none" />
                <CgSearch className='text-2xl'></CgSearch>
            </div>
        </div>
    );
};

export default MobileNavbar;