import React from 'react'

import { FaHome, FaStar } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { TbMessage2Filled } from "react-icons/tb";
import { FaWallet } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircleNotch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className='hidden lg:fixed lg:top-0 lg:left-0 lg:w-60 lg:h-screen lg:p-5 lg:grid lg:justify-items-center'>
        <div className=' mt-5'>
            <h1 className='font-bold text-2xl'>Travelingo</h1>
        </div>

        <ul className='mt-8 grid gap-2'>
            <li className='nav-item bg-[#17C58B] active-tab'><FaHome size={20}/>Dashboard</li>
            <li className='nav-item'> <IoTicketSharp size={20}/> Ticket</li>
            <li className='nav-item'><FaStar size={20}/>Favourite</li>
            <li className='nav-item'><TbMessage2Filled size={20}/> Message</li>
            <li className='nav-item'><FaWallet size={20}/> Transaction</li>
            <li className='nav-item'><IoMdSettings size={20}/> Settings</li>
        </ul>
        
        <div className='relative bg-[#B9F4E0] w-full h-auto rounded-xl mt-5 p-5 overflow-hidden'>
           <FaCircleNotch 
            size={300} 
            className='absolute -top-25 -right-3 opacity-100 rotate-45 z-0 text-[#D3F9EC]' 
          />
          <div className="relative z-10">
            <h1 className='text-xl font-bold'>
              <span className='text-orange-500'>50%</span> Discount
            </h1>
            <p className='font-bold text-sm'>
              Get a discount on certain days and don't miss it.
            </p>
            <div className='bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mt-10 cursor-pointer'>
              <FaArrowRightLong className="text-white" size={16} />
            </div>
          </div>
        </div>
        
        <ul className='mt-5 grid gap-2'>
            <li className='nav-item'><LuLogOut size={20} /> Logout</li>
        </ul>
    </aside>
  )
}

export default Sidebar