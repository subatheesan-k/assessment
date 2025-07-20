
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({image, title, location, rating}) => {
  const[isHover, setIsHover] = useState(false);
  return (
    <>
        <div className="relative w-70 h-70 rounded-xl overflow-hidden hover:cursor-pointer" onMouseEnter={() => setIsHover((prev => !prev))} onMouseLeave={() => setIsHover((prev => !prev))}>
            {isHover && (
                <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
            )}
            <img src={image} alt="" draggable={false} className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-300 ease-in-out ${isHover ? 'scale-110' : 'scale-100'}`} />
            <div className="absolute bottom-0 left-0 w-full z-20 p-3 text-white bg-gradient-to-t from-black/60 to-transparent">

                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg font-bold">{title}</h1>
                    <span className="text-sm flex items-center gap-1">
                    <FaStar /> {rating}
                    </span>
                </div>

                <p className="text-sm flex items-center gap-1 mt-1">
                    <FaLocationDot /> {location} {isHover}
                </p>
            </div>
        </div>
    </>
  )
}

export default Card