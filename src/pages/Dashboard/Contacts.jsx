import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaFileExcel, FaSyncAlt, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";

const Contacts = () => {


    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"



    const userData = [
        {
            username: 'Josh',
            email: 'josh@example.com',
            phone: '03422793234',
            status: 'pending',
            callsMade: 2,
            callDate: "12 Dec, 2020"
        },
        {
            username: 'Sarah',
            email: 'sarah@example.com',
            phone: '03014567891',
            status: 'failed',
            callsMade: 5,
            callDate: "15 Jan, 2021"
        },
        {
            username: 'Mike',
            email: 'mike@example.com',
            phone: '03216789012',
            status: 'success',
            callsMade: 8,
            callDate: "20 Feb, 2021"
        },
        {
            username: 'Emily',
            email: 'emily@example.com',
            phone: '03129876543',
            status: 'pending',
            callsMade: 1,
            callDate: "25 Mar, 2021"
        },
        {
            username: 'David',
            email: 'david@example.com',
            phone: '03316789432',
            status: 'failed',
            callsMade: 0,
            callDate: "30 Apr, 2021"
        },
        {
            username: 'Anna',
            email: 'anna@example.com',
            phone: '03478912345',
            status: 'success',
            callsMade: 3,
            callDate: "5 May, 2021"
        },
        {
            username: 'Lucas',
            email: 'lucas@example.com',
            phone: '03047891234',
            status: 'pending',
            callsMade: 7,
            callDate: "10 Jun, 2021"
        },
        {
            username: 'Sophia',
            email: 'sophia@example.com',
            phone: '03145678901',
            status: 'success',
            callsMade: 4,
            callDate: "15 Jul, 2021"
        },
        {
            username: 'Tom',
            email: 'tom@example.com',
            phone: '03214789567',
            status: 'failed',
            callsMade: 2,
            callDate: "20 Aug, 2021"
        },
        {
            username: 'Emma',
            email: 'emma@example.com',
            phone: '03325879641',
            status: 'success',
            callsMade: 6,
            callDate: "25 Sep, 2021"
        },
        {
            username: 'Em',
            email: 'ema@example.com',
            phone: '03235879641',
            status: 'pending',
            callsMade: 0,
            callDate: "-",
            nextCall: "25 Sep, 2021"
        },
    ];



    return (

        <div>


            {/* HEADER  */}

            <div className='flex justify-start md:justify-end items-center gap-x-4 flex-wrap'>


                <div className='bg-[#fff] border rounded-md py-2 px-3 flex items-center justify-between w-fit sm:w-[16rem] mt-2 '>
                    <input type="text" placeholder='Search' className='w-[100%] sm:w-[12rem] rounded-md mr-3 outline-none border-none bg-transparent' />
                    <CiSearch />
                </div>


                <div title='Fetch Leads From Hubspot' className='flex justify-center items-center bg-[#EA580C] rounded-md w-[6rem] py-2 px-3 text-[#fff] text-sm gap-x-2 cursor-pointer mt-2'>

                    <p className='text-white'>Resync</p>
                    <FaSyncAlt className='text-white' />

                </div>



                <div title='Upload Contact Data From Excel' className='flex justify-center items-center bg-[#008000] rounded-md w-[6rem] py-2 px-3 text-[#fff] text-sm gap-x-2 cursor-pointer mt-2'>
                    <p className='text-white'>Excel</p>
                    <FaFileExcel className='text-white' />
                </div>



            </div>


            {/* TABLE */}
            <div className="rounded-md min-w-[100%] flex-1 mt-6 overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table style={{ borderSpacing: "0 10px" }} className="min-w-[100%] border-separate ">
                        <thead>
                            <tr>
                                <th className={thStyle}>Call Id</th>
                                <th className={thStyle}>Customer Name</th>
                                <th className={thStyle}>Customer Email</th>
                                <th className={thStyle}>Customer Phone</th>
                                <th className={thStyle}>Status</th>
                                <th className={thStyle}>Calls Made</th>
                                <th className={thStyle}>Call Date</th>
                                <th className={thStyle}>Schedule Call</th>
                                <th className={thStyle}>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{user.username}</td>
                                    <td className="py-2 px-4 flex items-center gap-x-2">
                                        <IoMail className='text-[#3A974C]' />
                                        <p className=' text-nowrap'>{user.email}</p>
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className='flex items-center gap-x-2'>
                                            <FaPhoneAlt className='text-[#4285F4]' />
                                            <p className=' text-nowrap'>{user.phone}</p>
                                        </div>
                                    </td>
                                    <td className={`py-2 px-4`}><div className={`w-[4.5rem] h-[1.5rem] flex justify-center items-center rounded-md ${user.status === 'success' ? 'bg-green-500' : user.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'}`}><p className='text-white text-xs'>{user.status}</p></div></td>
                                    <td className="py-2 px-4 text-nowrap">{user.callsMade}</td>
                                    <td className="py-2 px-4 text-nowrap">{user.callDate}</td>

                                    <td className="py-2 px-4">
                                        <div className='flex items-center gap-x-2'>
                                            <FaCalendarAlt className='text-[#4285F4]' />
                                            <p className='text-nowrap'>{user?.nextCall ? user?.nextCall : "-"}</p>
                                        </div>
                                    </td>

                                    <td className='py-2 px-4'>
                                        <div className='flex items-center gap-x-2'>
                                            <IoMdTrash className='text-red-500 text-xl cursor-pointer' />
                                            <FaPhoneAlt className='text-[#4285F4] cursor-pointer' />
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




        </div>

    )
}

export default Contacts