import logo from "../../assets/logo/logob.png";
import ukryta from "../../assets/icons/ukryta.png";
import tree from "../../assets/icons/tree.png";
import log from "../../assets/icons/b1.png";
import b from "../../assets/icons/b.png";

const AboutUs = () => {
  return (
    <div className="w-11/12 sm:w-8/12 mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        <div className="">
          <div className="flex gap-2 sm:gap-4 h-8 sm:h-10 m-1 sm:m-2">
            <img src={logo} alt="Logo" className="h-full" />
            <img src={ukryta} alt="Ukryta" className="h-full" />
          </div>
          <p className="w-full sm:w-9/12 text-sm sm:text-base md:text-lg">
            Choć znajduje się w samym sercu Zakopanego, Willa Bór zapewnia
            wyjątkową ciszę i prywatność. Otoczona zielenią, daje wytchnienie po
            dniu pełnym wrażeń. Idealne miejsce na wypoczynek – blisko Krupówek,
            górskich szlaków i najlepszych restauracji, ale bez tłumów i hałasu.
          </p>
        </div>

        <div className="md:flex p-4 sm:p-6 md:p-8 lg:p-10 relative">
          <img className="-mr-20 sm:" src={tree} alt="Tree" />
          <div className="flex w-44 md:w-fit">
            <img className="mr-2 sm:mr-5" src={log} alt="Log" />
            <img src={b} alt="B" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
