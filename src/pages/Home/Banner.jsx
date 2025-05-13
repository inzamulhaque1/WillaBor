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
        className="absolute text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center px-4 animate-fadeIn"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        W centrum Zakopanego <br />
        <span className="font-rouge font-bold">ukryta</span> wśród drzew
      </p>

      <img
        className="h-12 sm:h-20 md:h-28 lg:h-36 absolute top-3 left-3 sm:static sm:ml-5"
        src={play}
        alt="Play icon"
      />

      {/* Date Inputs and Button */}
      <div className="absolute bottom-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 left-1/2 transform -translate-x-1/2 w-full px-4 sm:w-auto animate-slideUp">
        <div className="relative w-full sm:w-auto">
          <div className="flex items-center border border-white rounded-lg overflow-hidden">
            <FaCalendarAlt className="text-white ml-2" />
            <input
              type="text"
              placeholder="Data wyjazdu"
              className="text-white bg-transparent px-2 py-2 placeholder-white focus:outline-none w-full sm:w-36 md:w-44"
            />
          </div>
        </div>
        <div className="relative w-full sm:w-auto">
          <div className="flex items-center border border-white rounded-lg overflow-hidden">
            <FaCalendarAlt className="text-white ml-2" />
            <input
              type="text"
              placeholder="Data wyjazdu"
              className="text-white bg-transparent px-2 py-2 placeholder-white focus:outline-none w-full sm:w-36 md:w-44"
            />
          </div>
        </div>
        <FaArrowRight className="text-white hidden sm:inline-block animate-bounceX" />
        <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 w-fit hover:scale-105 transform transition-transform">
          Rezerwuj
        </button>
      </div>

      {/* Google Rating */}
      <div className="absolute bottom-48 sm:bottom-24 md:bottom-10 right-3 sm:right-5 md:right-10 lg:right-20 flex items-center gap-1 text-white text-xs sm:text-sm animate-fadeIn">
        <span>G</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-white" />
          ))}
        </div>
        <span>4,6 (674 opinii)</span>
      </div>


      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default Banner;