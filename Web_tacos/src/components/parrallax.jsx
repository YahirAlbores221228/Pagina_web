const Parallax = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/img/fondo3.jpg')" }}></div>
      <div className="relative z-10 flex items-center justify-center h-96 w-full lg:w-1/2 md:w-2/3 sm:w-3/4 bg-yellow-500 p-5">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white text-center font-serif">
          "Cada bocado es un viaje, cada taco una historia. Descubre la riqueza de la tradición mexicana en cada sabor. ¡Vive la experiencia!"
        </h1>
      </div>
    </div>
  );
};

export default Parallax;