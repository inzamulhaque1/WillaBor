import { FaArrowLeftLong } from "react-icons/fa6";
import y1 from "../../assets/img/y1.png";
import y2 from "../../assets/img/y2.png";
import z1 from "../../assets/img/z1.png";
import z3 from "../../assets/img/z3.png";
import z2 from "../../assets/img/z2.png";
import z4 from "../../assets/img/z4.png";
import z5 from "../../assets/img/z5.png";
import z6 from "../../assets/img/z6.png";
import z7 from "../../assets/img/z7.png";
import z8 from "../../assets/img/z8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const Rooms = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 relative overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 items-center">
        <div className="flex relative">
          {/* Left side - Text section */}
          <div className="flex pt-28 items-center justify-around text-center md:text-left z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-gray-800 mb-4 w-1/2">
              Zobacz nasze wnętrza i poczuj klimat domu.
            </h2>
            <span className="text-gray-500 text-sm flex items-center px-4 py-2 bg-[#F0E2D7] rounded-md">
              <FaArrowLeftLong className="text-black" />
            </span>
          </div>

          {/* Swiper with constrained width */}
          <div className="absolute hidden md:block left-1/2 w-[70%] max-w-4xl -translate-x-1/3 z-20">
            <Swiper
              slidesPerView={3} // Reduced to fit within constrained width
              spaceBetween={20}
              centeredSlides={true}
              className="mySwiper"

            >
              {[y1, y2, z1, z2,y1, z3, z4,y1, z5, z6,y1,z7,z8].map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Room ${i + 1}`}
                    className="w-full  rounded-2xl shadow-sm"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Critical styles */}
      <style jsx global>{`
        .mySwiper {
          overflow: hidden !important; /* Prevent slides from overflowing */
          width: 100% !important; /* Ensure Swiper respects container width */
        }
        .mySwiper .swiper-slide {
          transition: transform 0.3s ease;
          transform-origin: center;
        }
        .mySwiper .swiper-slide-active {
          transform: scale(1.1);
          z-index: 30 !important;
        }
        .swiper-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Rooms;