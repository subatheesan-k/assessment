import { FaCalendarAlt } from "react-icons/fa";
import dp1 from "../assets/images/dp1.jpg"
import dp2 from "../assets/images/dp2.jpg"
import dp3 from "../assets/images/dp3.jpg"

const Schedule = ({ image, title, dateRange }) => {
  return (
    <div className="border-2 p-5 rounded-xl flex gap-5 mt-3 hover:cursor-pointer hover:bg-gray-100">
  <img src={image} alt="" className="rounded-xl w-[120px] h-[100px] object-cover" />
  <div className="grid gap-3">
    <h1 className="font-bold text-md">{title}</h1>
    <p className="flex items-center gap-2 text-sm text-gray-600">
      <FaCalendarAlt className="text-gray-500" />
      {dateRange}
    </p>
    <div className="flex items-center">
      <img src={dp1} alt="" className="w-6 h-6 rounded-full border-2 border-white z-30" />
      <img src={dp2} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2 z-20" />
      <img src={dp3} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2 z-10" />
      <p className="text-[#17C58B] font-bold">+2</p>
    </div>
  </div>
</div>

  );
};

export default Schedule;
