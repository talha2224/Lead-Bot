import React from 'react'
import Logo from '../../assets/leadbot.png'

const Navbar = () => {
    return (

        <div className=' flex justify-between items-center py-4'>


            <div className='flex items-center gap-x-12'>

                <div className='flex items-center gap-x-2'>
                    <img src={Logo} alt="leadbot-logo" />
                    <h2 className='text-xl font-semibold'>Lead Bot</h2>
                </div>

            </div>

            <div className='flex items-center gap-x-4'>
                <p className='text-[#0F172A] cursor-pointer'>Product</p>
                <p className='text-[#0F172A] cursor-pointer'>Solution</p>
                <p className='text-[#0F172A] cursor-pointer'>Pricing</p>
                <p className='text-[#0F172A] cursor-pointer'>Resources</p>
            </div>


            <div className='flex items-center gap-x-6'>
                <p className='text-[#0F172A] cursor-pointer'>Login</p>
                <button className='text-[#0F172A] border-2 border-[#0F172A] w-[8rem] h-[2.5rem] rounded-md'>Singup Now</button>
            </div>


        </div>


    )
}

export default Navbar