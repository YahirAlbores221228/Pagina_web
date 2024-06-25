import favorito from "../assets/icons/favorite.png";
import taco1 from "../assets/img/taco1.jpg"
import taco2 from "../assets/img/taco2.jpg"
import taco3 from "../assets/img/taco3.jpg";

export const destacados = [
	{
		id_destacado1: 1,
		name: "Taco al pastor",
		descripcionts:
			"El taco de al pastor es carne de cerdo marinada, asada en trompo y servida en tortilla con piña, cebolla y cilantro.",
		precio: "$15.00",
        img: taco1,
        icons: favorito
	},
	{
		id_destacado1: 2,
		name: "Taco de azada",
		descripcionts:
			"El taco de asada es carne de res a la parrilla, servida en tortilla con cebolla, cilantro y salsa.",
		precio: "$15.00",
        img: taco2,
        icons: favorito
	},
	{
		id_destacado1: 3,
		name: "Taco de 3x1",
		descripcionts:
			"El taco 3x1 combina carne al pastor y asada en una tortilla, con cebolla, cilantro y salsa.",
		precio: "$15.00",
        img: taco3,
        icons: favorito
	},
];
