import { FaBell } from "react-icons/fa";
import { TbFilterPlus } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";

import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"
import item1 from "../assets/images/item1.png"
import item2 from "../assets/images/item2.png"
import item3 from "../assets/images/item3.png"
import list1 from "../assets/images/list1.png"
import list2 from "../assets/images/list2.png"
import list3 from "../assets/images/list3.png"
import man from "../assets/images/man.png"
import profile from "../assets/images/profile.png"

import Sidebar from '../components/Sidebar'
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import { useEffect, useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Schedule from "../components/Schedule";

const Dashboard = () => {
  const [selected, setSelected] = useState();
  const today = new Date();

  return (
    <>
        <Sidebar/>
        <div className='lg:ml-60 min-h-screen p-5 flex flex-col lg:flex-row'>
            <div className='bg-gray-100 w-full lg:w-[3850px] p-5 rounded-xl'>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Hello, Jemmy <span>👋🏻</span></h1>
                        <p className="font-bold text-gray-500">Welcome back and explore the world</p>
                    </div>

                    <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 border border-gray-200 w-full sm:w-auto">
                        <FaSearch size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search direction"
                            className="outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400 w-full sm:w-auto"
                        />
                        </div>
                        <div className="relative w-10 h-10 p-2 flex items-center justify-center bg-white hover:border-2 hover:border-gray-400 rounded-full cursor-pointer">
                        <FaBell className="text-gray-500 z-10" />
                        <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center z-20">
                            4
                        </span>
                        </div>
                    </div>
                </div>

                <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    <Card image={img1} title="Green Safari" location="Green Mountain" rating="4.8"/>
                    <Card image={img2} title="Night camping" location="Lightning lake" rating="4.8"/>
                    <Card image={img3} title="Mount climbing" location="Green Mountain" rating="4.8"/>
                </div>

                <div className="flex flex-col xl:flex-row justify-between gap-5">
                    <div className="bg-white w-full xl:flex-[2_2_0%] h-auto mt-5 p-5 rounded-xl">
                        <div className='flex justify-between'>
                            <div >
                                <h1 className="font-bold text-xl">Best Destination 🌈</h1>
                                <p className='font-bold text-gray-500'>100 Destination found</p>
                            </div>
                            <button className="p-3 border border-b-2 rounded-xl hover:cursor-pointer flex items-center gap-2">
                                <TbFilterPlus /> Filters
                            </button>
                        </div>

                        <ListItem image={item1} title="Green wood forest" location="Telangana" rating="4.8" price="99" />
                        <ListItem image={item2} title="Green forest camp" location="Chennai" rating="4.8" price="99" />
                        <ListItem image={item3} title="Desert festival" location="Gujarat" rating="4.8" price="99" />

                    </div>

                   <div className="w-full xl:w-[260px] h-auto mt-5 p-5 rounded-xl bg-[#2C2946] flex flex-col items-center text-center justify-center">
                        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                            <div className="relative w-[100px] h-[80px] overflow-bottom-hidden">
                                <div className="absolute bottom-0 w-[100px] h-[60px] bg-[#17C58B] rounded-full z-0">
                                    <img
                                    src={man}
                                    alt=""
                                    width={100}
                                    className="absolute -top-12 left-0 z-10 pointer-events-none"
                                    style={{ clipPath: 'inset(0 0 25px 0)' }}
                                    />
                                </div>
                            </div>
                        </div>
                            
                        <h1 className="text-white mt-2 text-xl font-bold">
                            Let's Explore <br /> the Beauty
                        </h1>
                         <p className="text-sm text-white">Get special offers & news</p>

                        <button className="bg-[#17C58B] w-full rounded-xl p-2 mt-4 text-white hover:text-black hover:bg-white hover:cursor-pointer">
                            Join Now
                        </button>
                    </div>
                </div>

            </div>

            <div className='w-full mt-5 lg:mt-0 p-5 rounded-xl h-auto'>
                <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-5">
                    <div className="flex gap-5">
                        <img src={profile} alt="" height={55} width={55} />
                        <div >
                            <h1 className='text-xl font-bold'>Jemmy Max</h1>
                            <p className='font-bold'>Traveler Enthusiast</p>
                        </div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F4F8F7] hover:border-2 hover:border-gray-400 rounded-full cursor-pointer transition-all">
                        <MdKeyboardArrowDown className="text-gray-500 text-xl" />
                    </div>
                </div>

                <div className="justify-items-center mt-5">
                    <DayPicker
                        animate
                        mode="range"
                        selected={selected}
                        showOutsideDays
                        onSelect={setSelected}
                        classNames={{
                            day: 'text-black hover:bg-gray-100 hover:text-black text-bold rounded-full',
                            day_range_start: 'bg-[#17C58B] text-white rounded-r-none',
                            day_range_end: 'bg-[#17C58B] text-white rounded-l-none',
                            day_range_middle: 'bg-green-500 text-white rounded-none',
                            day_today: 'text-blue-600 font-bold border-2 border-[#17C58B]',
                            day_disabled: 'text-gray-100',
                            day_outside: 'text-gray-100'
                        }}
                        modifiersClassNames={{
                            selected: 'bg-[#17C58B] text-black text-bold',
                            range_start: 'bg-[#17C58B] text-white text-bold',
                            range_end: 'bg-[#17C58B] text-white text-bold',
                            range_middle: 'bg-gray-100 text-[#17C58B] text-bold',
                        }}
                        />
                </div>

                <div className="w-full mt-5">
                    <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-3">
                        <h1 className="font-bold text-xl">My Schedule</h1>
                        <PiDotsThreeBold size={30} className="text-gray-400 hover:cursor-pointer"/>
                    </div>
                    <div className="mt-5">
                        <Schedule image={list1} title="Crocked Forest" dateRange="20 may - 23 may"/>
                        <Schedule image={list2} title="Fem Waterfall" dateRange="20 may - 23 may"/>
                        <Schedule image={list3} title="Night Camping" dateRange="20 may - 23 may"/>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Dashboard