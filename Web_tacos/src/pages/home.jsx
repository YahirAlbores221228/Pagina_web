import { useState, useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Menu from "../components/menu";
import Destacados from "../components/destacados";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Parallax2 from "../components/parrallax2";
import Parallax from "../components/parrallax";
import Promotions from "../components/promociones";
import Maps from "../components/maps";

import Spinner from "../components/spiners";


function Home() {

    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);
        const timer = setTimeout(() => {
            setIsloading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isloading) {
        return <Spinner />;
    }

    return (
        <>
            <Header />
            <div id="home">
                <Hero />
            </div>
            <div id="destacados">
                <Destacados />
            </div>
            <div id="parallax">
                <Parallax />
            </div>
            <div id="menu">
                <Menu />
            </div>
            <div id="parallax2">
                <Parallax2 />
            </div>
            <div id="promociones">
                <Promotions />
            </div>
            <div id="mapa">
                <Maps />
            </div>
            <div id="contacto">
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default Home;
