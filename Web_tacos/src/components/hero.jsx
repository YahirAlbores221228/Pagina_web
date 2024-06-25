import taco1 from "../assets/img/select1.jpg"
import taco2 from "../assets/img/select2.jpg"
import taco3 from "../assets/img/select3.jpg"
import "../assets/styles/home.css"
import { Link } from 'react-scroll';

function Hero() {
    return (
        <>
            <section id="home" className="z-0 dark-overlay text-white h-screen flex flex-col justify-center items-center text-center bg-no-repeat bg-cover w-full" style={{ backgroundImage: "url('/src/assets/img/fondo3.jpg')" }}>
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-8/12 z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-500 uppercase animate__animated animate__backInDown" >"¡Nuestros tacos son México en cada mordida!"</h1>
                    <p className="mb-8 text-base sm:text-lg md:text-xl">¡Descubre el auténtico sabor de México en cada taco! Nuestros ingredientes frescos y
                        recetas tradicionales te llevarán en un viaje culinario que despertará tus sentidos.</p>
                </div>
                <div className="flex space-x-4 z-10">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded font-medium hover:text-white"><Link to="menu" smooth={true} duration={500}>Conocer menu</Link></button>
                    <button className="bg-transparent border-2 border-yellow-500 text-white py-2 px-4 rounded font-medium">Ordenar</button>
                </div>
                <div className="mt-8 flex space-x-4 z-10">
                    <img src={taco1} alt="Taco 1" className="w-20 h-20 object-cover border-2 border-yellow-600 rounded" />
                    <img src={taco2} alt="Taco 2" className="w-20 h-20 object-cover border-2 border-yellow-600 rounded" />
                    <img src={taco3} alt="Taco 3" className="w-20 h-20 object-cover border-2 border-yellow-600 rounded" />
                </div>
            </section>
        </>


    );
}
export default Hero;


