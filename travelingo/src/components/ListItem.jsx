import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ListItem = ({ image, title, location, rating, price }) => {
  return (
    <div className="flex gap-3 mt-3 items-center hover:cursor-pointer hover:bg-gray-100 rounded-xl">
      <div className="w-[70px] h-[70px] flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <span className="flex items-center gap-1"><FaLocationDot /> {location}</span>
            <span className="flex items-center gap-1"><FaStar /> {rating} </span>
          </p>
        </div>

        <h1 className="text-right font-medium text-nowrap pr-2">${price} <span className="text-gray-500">/night</span></h1> 
      </div>
    </div>
  );
};

export default ListItem;
