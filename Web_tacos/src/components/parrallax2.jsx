function Parallax2() {
    return (
        <div className="relative overflow-hidden h-72 bg-gray-500">
            <div className="absolute top-0 left-0 w-full h-72 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/img/fondo1.jpg')" }}></div>
        </div>

    );
}
export default Parallax2;