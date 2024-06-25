import { useState } from "react";
import { menuItems } from "../Data/datamenu";

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState('MenuPrincipal');
    const [animating, setAnimating] = useState(false);
    const categoryNames = {
        MenuPrincipal: 'Menu Principal',
        Especialidad: 'Especialidad de la Casa',
        Tacos3x1: 'Tacos 3x1',
        Embotellados: 'Embotellados',
        Aguanatural: 'Agua Natural'
    };

    const handleCategoryChange = (category) => {
        setAnimating(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setAnimating(false);
        }, 500);
    };

    return (
        <>
            <div className="h-full py-10 flex justify-center items-center">
                <div className="w-full max-w-4xl p-4">
                    <div className="p-5">
                        <h2 className="text-3xl font-semibold text-yellow-500 text-center">MENU</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4">
                        <button onClick={() => handleCategoryChange('MenuPrincipal')} className={`px-4 py-2 text-slate-800 font-medium rounded border-amber-400 border-2 transition duration-500 ${selectedCategory === 'MenuPrincipal' ? 'bg-amber-400 text-white' : 'hover:bg-amber-400 hover:text-white'}`}>Menu principal</button>
                        <button onClick={() => handleCategoryChange('Especialidad')} className={`px-4 py-2 text-slate-800 font-medium rounded border-amber-400 border-2 transition duration-500 ${selectedCategory === 'Especialidad' ? 'bg-amber-400 text-white' : 'hover:bg-amber-400 hover:text-white'}`}>Especialidad de la casa</button>
                        <button onClick={() => handleCategoryChange('Tacos3x1')} className={`px-4 py-2 text-slate-800 font-medium rounded border-amber-400 border-2 transition duration-500 ${selectedCategory === 'Tacos3x1' ? 'bg-amber-400 text-white' : 'hover:bg-amber-400 hover:text-white'}`}>Tacos 3x1</button>
                        <button onClick={() => handleCategoryChange('Embotellados')} className={`px-4 py-2 text-slate-800 font-medium rounded border-amber-400 border-2 transition duration-500 ${selectedCategory === 'Embotellados' ? 'bg-amber-400 text-white' : 'hover:bg-amber-400 hover:text-white'}`}>Embotellados</button>
                        <button onClick={() => handleCategoryChange('Aguanatural')} className={`px-4 py-2 text-slate-800 font-medium rounded border-amber-400 border-2 transition duration-500 ${selectedCategory === 'Aguanatural' ? 'bg-amber-400 text-white' : 'hover:bg-amber-400 hover:text-white'}`}>Agua natural</button>
                    </div>
                    <div className="p-2 mt-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{categoryNames[selectedCategory]}</h2>
                        <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                            {menuItems[selectedCategory].map((item, index) => (
                                <div key={index} className="flex flex-col items-center mb-7 bg-white p-2 rounded shadow-xl">
                                    <img src={item.image} alt={item.name} className="w-full h-64 rounded-md object-cover mb-4" />
                                    <div className="flex flex-col items-center gap-2">
                                        <h3 className="text-xl font-semibold text-yellow-500 text-center">{item.name}</h3>
                                        <p className="text-gray-700 text-base font-medium text-center">{item.description}</p>
                                        <p className="text-gray-900 font-bold">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
