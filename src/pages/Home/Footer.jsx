import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import logo from '../../assets/logo/logob.png'
export default function Footer() {
  return (
    <footer className="bg-[#b28c78] text-[#f1e6dd] text-sm font-light">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social Icons */}
        <div className="space-y-4">
          <div className='flex'><img className='h-8 mr-2' src={logo} alt="" /><h2 className="text-4xl font-serif font-medium">Willa Bór</h2></div>
          <div className="flex space-x-3">
            <a href="#" className="bg-[#e9d6c6] text-[#b28c78] p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#e9d6c6] text-[#b28c78] p-2 rounded-full">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-2">Strona</h3>
          <ul className="space-y-1">
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Oferta</a></li>
            <li><a href="#">Atrakje</a></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-2">Kontakt</h3>
          <ul className="space-y-1">
            <li className="flex items-center space-x-2">
              <MdPhone /> <a href="tel:698661763">698 661 763</a>
            </li>
            <li className="flex items-center space-x-2">
              <MdLocationOn /> <a href="https://maps.google.com/?q=Jagiellońska 6A, 34-500 Zakopane" target="_blank">Jagiellońska 6A, 34-500 Zakopane</a>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail /> <a href="mailto:recepcja@willabor.pl">recepcja@willabor.pl</a>
            </li>
          </ul>
        </div>

        {/* Location Map Placeholder */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-2">Lokalizacja</h3>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1234567890123!2d19.948999999999997!3d50.061999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1234567890%3A0x123456789abcdef!2sWilla%20B%C3%B3r!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa lokalizacji Willa Bór"
          className="w-full"
        ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#c3a899] text-[#f1e6dd] text-xs flex flex-col md:flex-row justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <span>Copyright 2025 Willa Bór</span>
        <div className="flex space-x-4">
          <a href="#">Polityka Prywatności</a>
          <a href="#">RODO</a>
          <a href="#">Regulamin</a>
        </div>
        <span className="text-right">Design: Cobance Studio | Development: 234.studio</span>
      </div>
    </footer>
  );
}
