import React from 'react'

import { FaHome, FaStar } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { TbMessage2Filled } from "react-icons/tb";
import { FaWallet } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 w-60 h-screen p-5 justify-items-center'>
        <div className=' mt-5'>
            <h1 className='font-bold text-2xl'>Travelingo</h1>
        </div>

        <ul className='mt-10 grid gap-2'>
            <li className='nav-item bg-[#17C58B] active-tab'><FaHome size={20}/>Dashboard</li>
            <li className='nav-item'> <IoTicketSharp size={20}/> Ticket</li>
            <li className='nav-item'><FaStar size={20}/>Favourite</li>
            <li className='nav-item'><TbMessage2Filled size={20}/> Message</li>
            <li className='nav-item'><FaWallet size={20}/> Transaction</li>
            <li className='nav-item'><IoMdSettings size={20}/> Settings</li>
            <li className='nav-item'><LuLogOut size={20} /> Logout</li>
        </ul>
    </aside>
  )
}

export default Sidebar