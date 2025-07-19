import { FaBell } from "react-icons/fa";
import { TbFilterPlus } from "react-icons/tb";

import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"
import item1 from "../assets/images/item1.png"
import item2 from "../assets/images/item2.png"
import item3 from "../assets/images/item3.png"
import man from "../assets/images/man.png"

import Sidebar from '../components/Sidebar'
import Card from '../components/Card';
import ListItem from '../components/ListItem';

const Dashboard = () => {
  return (
    <>
        <Sidebar/>
        <div className='ml-60 min-h-screen p-5 flex '>
            <div className='bg-gray-100 w-[750px] p-5 rounded-xl flex-1/2'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>Hello, Jemmy <span>👋🏻</span></h1>
                        <p className='font-bold'>Welcome back and explore the world</p>
                    </div>

                    <div>
                        <div className='w-10 h-10 p-3 justify-items-center bg-white hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                            <FaBell className='text-gray-500'/>
                        </div>
                    </div>
                </div>

                <div className='mt-15 flex flex-row gap-5 justify-items-center overflow-hidden'>
                    <Card image={img1} title="Green Safari" location="Green Mountain" rating="4.8"/>
                    <Card image={img2} title="Night camping" location="Lightning lake" rating="4.8"/>
                    <Card image={img3} title="Mount climbing" location="Green Mountain" rating="4.8"/>
                </div>

                <div className="flex justify-between gap-4">
                    <div className="bg-white flex-2/3 h-auto mt-5 p-5 rounded-xl">
                        <div className='flex justify-between'>
                            <div >
                                <h1 className="font-bold text-xl">Best Destination 🌈</h1>
                                <p>100 Destination found</p>
                            </div>
                            <button className="p-3 border border-b-2 rounded-xl hover:cursor-pointer flex items-center gap-2">
                                <TbFilterPlus /> Filters
                            </button>
                        </div>

                        <ListItem image={item1} title="Green wood forest" location="Telangana" rating="4.8" price="99" />
                        <ListItem image={item2} title="Green forest camp" location="Chennai" rating="4.8" price="99" />
                        <ListItem image={item3} title="Desert festival" location="Gujarat" rating="4.8" price="99" />

                    </div>

                    <div className="w-[228px] h-auto mt-5 p-5 rounded-xl bg-[#2C2946] flex flex-col items-center text-center justify-center">
                        <img src={man} alt="" width={100} className="pointer-events-none"/>
                        <h1 className="text-white mt-2 text-xl">Let's Explore the Beauty</h1>
                        <p className="text-sm text-white">Get special offers & news</p>

                        <button className="bg-[#17C58B] rounded-xl p-3 mt-4 text-white hover:text-black hover:bg-white hover:cursor-pointer">
                            Join Now
                        </button>
                    </div>

                </div>

            </div>

            <div className='w-[750px] p-5 rounded-xl h-[685px] flex-2/2'>
                
            </div>
        </div>
    </>
  )
}

export default Dashboard