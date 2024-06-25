import img1 from "../assets/img/fondo1.jpg"
import img2 from "../assets/img/fondo2.jpg"
import coco from "../assets/img/coco.jpg"
import piña from "../assets/img/piña.jpg"
import naranja from "../assets/img/naranja.jpg"
import coca from "../assets/img/coca.jpg"
import pepsi from "../assets/img/pepsi.jpg"
import pastor from "../assets/img/pastor1.jpg"
import upfree from "../assets/img/7up.jpg"
import azada from "../assets/img/azada2.jpg"
import carnitas from "../assets/img/carnitas.jpg"
import chorizo from "../assets/img/chorizo.jpg"
import azadaguacamole from "../assets/img/azadaguacamole.jpg"
import tripa_quesillo from "../assets/img/tripa_quesillo.jpg"
import azadanopales from "../assets/img/azadanopales.jpg"
import supremo from "../assets/img/supremo.jpg"
import camaron from "../assets/img/camaron.jpg"
import t_pescado from "../assets/img/t_pescado.jpg"
import combos from "../assets/img/combos.jpg"


export const menuItems = {
    MenuPrincipal: [
        { name: 'Taco supremo', description: 'Una mezcla de carnes al pastor, asada y tripa, con cebolla, cilantro y una combinación especial de salsas, servido en una tortilla grande.', price: '$20.00', image: supremo},
        { name: 'Taco de camarón', description: 'Taco de camarón a la parrilla, con col morada, aguacate y una cremosa salsa chipotle.', price: '$22.00', image: camaron },
        { name: 'Taco de pescado baja', description: 'Taco de pescado empanizado estilo Baja California, con col rallada, pico de gallo y salsa tártara.', price: '$22.00', image: t_pescado },
        { name: 'Combos de tacos', description: 'Incluye 1 taco de lo tres tipos de combos: tradicionales, mariscos y vegetarianos, todos con ingredientes frescos y salsas especiales.', price: '$50.00', image: combos }
    ],
    
    Especialidad: [
        { name: 'Asada con guacamole supremo', description: 'Taco de carne asada con una generosa porción de guacamole, cebolla y cilantro fresco.', price: '$17.00', image: azadaguacamole },
        { name: 'Tripa y queso fundido', description: 'Taco de tripa con queso fundido, cebolla, cilantro y salsa roja', price: '$20.00', image: tripa_quesillo },
        { name: 'Asada con nopales', description: 'Taco de carne asada con nopales asados, cebolla, cilantro y una salsa única.', price: '$17.00', image: azadanopales },
    ],
    Tacos3x1: [
        { name: 'Tacos al pastor', description: 'Tres deliciosos tacos de cerdo adobado con piña, cebolla y cilantro, servidos con una salsa de tu elección.', price: '$12.00', image: pastor },
        { name: 'Tacos de carne asada', description: 'Tres tacos llenos de jugosa carne asada, acompañados de guacamole, cebolla, y cilantro, con limón y salsa al gusto.', price: '$13.00', image: azada },
        { name: 'Tacos de carnitas', description: 'Tres tacos con carnitas suculentas, acompañados de cebolla, cilantro y una salsa verde especial.', price: '$12.00', image: carnitas },
        { name: 'Tacos de chorizo', description: 'Tres tacos de chorizo picante, con papas, cebolla, cilantro y un toque de limón.', price: '$12.00', image: chorizo },
    ],
    Embotellados: [
        { name: 'Coca cola', description: 'Disfruta de nuestros refrescos embotellados de Coca-Cola. Refrescantes y llenos de sabor, perfectos para cualquier ocasión.', price: '$25.00', image: coca },
        { name: 'Pepsi', description: 'Disfruta del sabor inigualable de Pepsi en cada sorbo. Refrescante y perfecto para cualquier ocasión.', price: '$25.00', image: pepsi },
        { name: 'Pepsi', description: 'Disfruta de la frescura de 7UP Free sin azúcar. Refrescante y perfecto para cualquier momento.', price: '$25.00', image: upfree },
    ],
    Aguanatural: [
        { name: 'Agua de coco', description: 'Hidrátate con nuestra agua de coco 100% natural. Refrescante y deliciosa, ideal para cualquier momento del día.', price: '$20.00', image: coco },
        { name: 'Agua de piña', description: 'Disfruta nuestra agua de piña 100% natural. Refrescante y dulce, perfecta para cualquier ocasión.', price: '$20.00', image: piña },
        { name: 'Agua de naranja', description: 'Saborea nuestra agua de naranja 100% natural. Refrescante y cítrica, ideal para cualquier momento del día. ', price: '$20.00', image: naranja }
    ]
    
}