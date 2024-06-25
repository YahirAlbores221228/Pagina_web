import { Link } from 'react-scroll';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="fixed z-20 top-0 left-0 right-0 w-full h-18 bg-zinc-800 bg-opacity-70 backdrop-blur-sm p-5 flex justify-between items-cente">
                <div className="text-white text-2xl font-bold underline uppercase">Sabores de México</div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
                <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:static bg-zinc-800 lg:bg-transparent top-20 left-0 w-full lg:w-auto`}>
                    <ul className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-4 p-5 lg:p-0">
                        <li><Link to="home" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Inicio</Link></li>
                        <li><Link to="menu" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Menu</Link></li>
                        <li><Link to="destacados" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Destacados</Link></li>
                        <li><Link to="promociones" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Promociones</Link></li>
                        <li><Link to="contacto" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Contacto</Link></li>
                        <li><Link to="mapa" smooth={true} duration={500} className="text-white hover:text-yellow-500 font-medium cursor-pointer">Ubicacion</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
