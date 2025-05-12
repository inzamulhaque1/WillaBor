import logo from "../assets/logo/logo1.png";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-2 sm:p-3">
      <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-8 lg:space-x-16 items-center">
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">Strona główna</a>
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">O nas</a>
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">Oferta</a>
        <div className="flex items-center space-x-2 py-2 sm:py-0">
          <img src={logo} alt="Willa Bór Logo" className="h-8 sm:h-10" />
          <p className="text-3xl sm:text-4xl md:text-5xl font-playfair">Willa Bór</p>
        </div>
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">Atrakcje</a>
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">Galeria</a>
        <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">Kontakt</a>
      </div>
    </div>
  );
};

export default Navbar;