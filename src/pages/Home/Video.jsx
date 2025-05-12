import bg from "../../assets/bg/bg2.png";
import play from "../../assets/icons/play1.png";

const Video = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
      <div
        className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-playfair mb-1 sm:mb-2">
            Twoja baza wypadowa w sercu Zakopanego
          </h2>
          <p className="text-xs sm:text-xs md:text-xs max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-4">
            Willa Bór to idealna baza – wszędzie masz blisko, a jednocześnie czujesz się jak w swojej prywatnej oazie. Poranna kawa z widokiem na odprężającą zieleń, a potem? Szlaki, Krupówki, termy – wszystko w zasięgu spaceru. Ruszaj, gdzie chcesz. My zadbamy, byś miał gdzie wrócić.
          </p>

          {/* Play icon centered below text */}
          <img
            src={play}
            alt="Play Icon"
            className="absolute h-24 sm:h-28 md:h-32 lg:h-40 mt-12 sm:mt-16 md:mt-20 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;