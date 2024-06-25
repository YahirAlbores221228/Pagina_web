import phone from "../assets/icons/phone.png";
import gmail from "../assets/icons/gmail.png";
import reloj from "../assets/icons/reloj.svg";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="h-full">
                <div className="p-5">
                    <h2 className="text-3xl text-yellow-500 text-center font-semibold">CONTACTO</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center p-10">
                    <div className="mb-10 lg:mb-0">
                        <div className="flex flex-col gap-2 text-center w-full sm:p-4 sm:w-10/12">
                            <p className="text-lg font-base">2 Av Sur Oriente, Codigo postal: 29160, Col. Las margaritas, Tuxtla Gutierrez, Chiapas</p>
                            <div className="flex justify-center gap-2 items-center">
                                <img src={phone} alt="Phone Icon" />
                                <p className="text-lg font-base text-yellow-500">+52-961 323 4438 - 07740448935</p>
                            </div>
                            <div className="flex justify-center gap-2 items-center">
                                <img src={gmail} alt="Email Icon" />
                                <p className="text-lg font-base text-yellow-500">tacosadelita@gmail.com</p>
                            </div>
                            <div className="flex justify-center gap-2 ">
                                <img src={reloj} alt="Hours Icon" />
                                <p className="text-lg font-medium">Lunes - Sabado de 9:00 am a 12:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form action="" method="post" >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full p-5 bg-white">
                                <input className="border-2 p-3 w-full sm:w-72 outline-none focus:border-yellow-500 focus:shadow-lg rounded" type="text" name="names" required placeholder="Nombre" />
                                <input className="border-2 p-3 w-full sm:w-72 outline-none focus:border-yellow-500 focus:shadow-lg rounded" type="text" required placeholder="Telefono" />
                                <input className="border-2 p-3 w-full col-span-1 sm:col-span-2 outline-none focus:border-yellow-500 focus:shadow-lg rounded" type="email" required placeholder="Direccion de correo electronico" />
                                <textarea name="" className="border-2 w-full col-span-1 sm:col-span-2 h-32 resize-none p-2 outline-none focus:border-yellow-500 focus:shadow-lg rounded" required placeholder="Mensaje" id=""></textarea>
                                <button onClick={handleSubmit} className="bg-yellow-500 p-3.5 w-full col-span-1 sm:col-span-2 rounded-lg font-medium text-white">CONTACTENOS</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
