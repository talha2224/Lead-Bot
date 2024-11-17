import React from 'react'
import AvatarIcon from '../../assets/dashboard/avatar.svg';
import { IoLogOut } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../context/SidebarContext';

const Header = ({ location }) => {
    const { isNavOpen, toggleNav } = useSidebar();

    return (

        <div className='w-[100%] flex justify-between items-center p-5 border-b border-[lightgray]'>

            <div className='flex items-center gap-x-4'>
                <GiHamburgerMenu className='lg:hidden block'onClick={()=>toggleNav(!isNavOpen)} />
                <p className='text-lg'>{location === "home" ? "Dashboard" : location.charAt(0).toUpperCase() + location.slice(1)}</p>
            </div>


            <div className='flex items-center gap-x-4'>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e7e7e9] rounded-md cursor-pointer'>
                    <img src={AvatarIcon} alt="" />
                </div>

                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e7e7e9] rounded-md cursor-pointer'>
                    <IoLogOut className='text-black' />
                </div>
            </div>

        </div>
    )
}

export default Header