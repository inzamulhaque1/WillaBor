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
        className="absolute text-white text-2xl sm:text-3xl md:text-6xl  text-center px-4 "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        W centrum Zakopanego <br />{" "}
        <span className="font-rouge font-bold ">ukryta</span> wśród drzew
      </p>

      <img className="h-36 " src={play} alt="" />

      {/* Date Inputs and Button */}
      <div className="absolute bottom-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 left-1/2 transform -translate-x-1/2">
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
        </div>{" "}
        <FaArrowRight className="text-white" />
        <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
          Rezerwuj
        </button>
      </div>
      {/* Google Rating */}
      <div className="absolute bottom-10 right-20 flex items-center gap-1 text-white">
        <span className="text-sm">G</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-white" />
          ))}
        </div>
        <span className="text-sm">4,6 (674 opinii)</span>
      </div>
    </div>
  );
};

export default Banner;
