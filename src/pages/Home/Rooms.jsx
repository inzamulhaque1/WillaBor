import { FaArrowLeftLong } from "react-icons/fa6";
import y1 from "../../assets/img/y1.png";
import y2 from "../../assets/img/y2.png";

const Rooms = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">

        <div className="flex items-center justify-around text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-gray-800 mb-4 w-1/2">
            Zobacz nasze wnętrza i poczuj klimat domu.
          </h2>
          <span className="text-gray-500 text-sm flex items-center px-4 py-2 bg-[#F0E2D7] rounded-md">
            <FaArrowLeftLong className="text-black " />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <img
            src={y1}
            alt="Room 1"
            className="w-full h-auto rounded-2xl shadow-sm"
          />
          <img
            src={y2}
            alt="Room 2"
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
