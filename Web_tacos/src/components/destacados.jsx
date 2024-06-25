import { useEffect } from "react";
import { destacados } from "../Data/datadestacados";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

function Destacados() {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <>
            <div className="py-20 h-full">
                <h2 className="text-center text-3xl font-semibold text-yellow-500">LO MAS DESTACADO</h2>
                <div className="max-w-6xl mx-auto mt-10 grid justify-items-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {destacados.map((item, index) => (
                        <div key={index.id_destacado1} className="flex flex-col items-center bg-white w-10/12 sm:w-10/12 lg:w-10/12 rounded-lg overflow-hidden shadow-xl" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="200" data-aos-delay={index * 200}>
                            <img src={item.img} alt="" className="w-full h-72 object-cover" />
                            <div className="flex flex-col gap-2 p-4">
                                <h3 className="text-xl font-semibold text-yellow-500 ">{item.name}</h3>
                                <p className="text-gray-700 text-base font-medium ">{item.descripcionts}</p>
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-900 font-bold">{item.precio}</p>
                                    <img src={item.icons} alt="" className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Destacados;
