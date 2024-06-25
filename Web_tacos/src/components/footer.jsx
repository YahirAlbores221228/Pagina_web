import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center align-center h-72">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold">Sabores de México</h2>
          <p className="text-gray-400">Auténticos sabores mexicanos</p>
        </div>
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li><Link to="home" smooth={true} durantion={500} className="hover:text-yellow-500 cursor-pointer">Inicio</Link></li>
          <li><Link to="menu" smooth={true} durantion={500} className="hover:text-yellow-500 cursor-pointer">Menu</Link></li>
          <li><Link to="destacados" smooth={true} durantion={500} className="hover:text-yellow-500 cursor-pointer">Destacados</Link></li>
          <li><Link to="promociones" smooth={true} durantion={500} className="hover:text-yellow-500 cursor-pointer">Promociones</Link></li>
          <li><Link to="contacto" smooth={true} durantion={500} className="hover:text-yellow-500 cursor-pointer">Contacto</Link></li>
        </ul>
        <div className="flex space-x-7">
          <a href="https://www.facebook.com" className="text-gray-400 hover:text-yellow-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-gray-400 hover:text-yellow-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-400 hover:text-yellow-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Sabores de México. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
