import { NavLink } from 'react-router-dom';
import './Sidebar.css'

import { BsCart2 } from 'react-icons/bs'
import { TbDevicesPlus } from 'react-icons/tb'
import { HiMiniSquaresPlus } from 'react-icons/hi2'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { LiaUsersCogSolid } from 'react-icons/lia'

const Sidebar = () => {
    return (
        <div className="sidebar h-screen w-72 overflow-y-auto border-r shadow-xl">
            <div className="h-full py-10">
                <div className='pb-10 flex justify-center'>
                    <img src="/logo.png" className='h-10' alt="" />
                </div>
                <div className='flex flex-col gap-2 text-lg ps-3'>
                    <NavLink to={'/dashboard/orders'} className={({ isActive }) => isActive ? 'link-active' : 'links'}>
                        <BsCart2 className='text-xl'></BsCart2>Orders
                    </NavLink>
                    <NavLink className={'links'}>
                        <TbDevicesPlus className='text-xl'></TbDevicesPlus>Add Product
                    </NavLink>
                    <NavLink to={'/dashboard/categories'} className={({ isActive }) => isActive ? 'link-active' : 'links'}>
                        <HiMiniSquaresPlus className='text-xl'></HiMiniSquaresPlus>Categories
                    </NavLink>
                    <NavLink className={'links'}>
                        <TbDeviceAnalytics className='text-xl'></TbDeviceAnalytics>
                        analytics
                    </NavLink>
                    <NavLink className={'links'}>
                        <LiaUsersCogSolid className='text-xl'></LiaUsersCogSolid>
                        Users
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;