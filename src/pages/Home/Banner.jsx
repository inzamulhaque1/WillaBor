import bg from "../../assets/bg/back1.png";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaStar,
  FaPlayCircle,
} from "react-icons/fa";
import play from "../../assets/icons/play1.png";

const Banner = () => {
  return (
    <div
      className="h-screen sm:h-[80vh] bg-cover bg-center m-3 relative flex items-center justify-center rounded-b-4xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Centered Text */}
      <p
        className="absolute text-white text-2xl sm:text-3xl md:text-6xl text-center px-4"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        W centrum Zakopanego <br />
        <span className="font-rouge font-bold">ukryta</span> wśród drzew
      </p>

      <img
        className="h-20 sm:h-28 md:h-36 absolute top-5 left-5 sm:static"
        src={play}
        alt=""
      />

      {/* Date Inputs and Button */}
      <div className="absolute bottom-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 left-1/2 transform -translate-x-1/2 w-full px-4 sm:w-auto">
        <div className="relative">
          <div className="flex items-center border border-white rounded-lg overflow-hidden">
            <FaCalendarAlt className="text-white ml-2" />
            <input
              type="text"
              placeholder="Data wyjazdu"
              className="text-white bg-transparent px-2 py-2 placeholder-white focus:outline-none w-36 sm:w-44"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center border border-white rounded-lg overflow-hidden">
            <FaCalendarAlt className="text-white ml-2" />
            <input
              type="text"
              placeholder="Data wyjazdu"
              className="text-white bg-transparent px-2 py-2 placeholder-white focus:outline-none w-36 sm:w-44"
            />
          </div>
        </div>
        <FaArrowRight className="text-white hidden sm:inline-block" />
        <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors w-fit">
          Rezerwuj
        </button>
      </div>

      {/* Google Rating */}
      <div className="absolute bottom-24 sm:bottom-10 right-5 sm:right-20 flex items-center gap-1 text-white text-xs sm:text-sm">
        <span className="">G</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-white" />
          ))}
        </div>
        <span className="">4,6 (674 opinii)</span>
      </div>
    </div>
  );
};

export default Banner;
