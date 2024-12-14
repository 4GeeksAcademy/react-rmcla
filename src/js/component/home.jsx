import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";


const vatos = [
	{
		cardTitle: "Miklo Velka",
		cardText: "PODRÉ SER BLANCO POR FUERA, PERO SOY MORENO POR DENTRO, HASTA EL HUESO",
		cardImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroRaJv8WzCd86DlixoyXim_ddl61PtY-krg&s",
	},
	{
		cardTitle: "Paco Aguilar",
		cardText: "¡LA VIDA ES UN RIESGO, CARNAL!",
		cardImgSrc: "https://pbs.twimg.com/profile_images/1629714268/paco4_1__400x400.jpg",
	},
	{
		cardTitle: "Cruz Candelaria",
		cardText: "PUES HAY UNA LATA DE CHING.. TU MADRE EN LA MESA, MEN. POR QUÉ NO TE SIRVES?",
		cardImgSrc: "https://i1.sndcdn.com/artworks-000490223091-u7upjk-t500x500.jpg",
	},
	{
		cardTitle: "Magic Mike",
		cardText: "LA VIDA ES COMO UN JUEGO DE CARTAS CARNAL. DEBES JUGAR CON LA MANO QUE TE TOCÓ",
		cardImgSrc: "https://i.pinimg.com/originals/b6/b8/cc/b6b8cc2fe84662ede7c63129cdea07af.jpg",
	}
];
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{vatos.map((post, id) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={id}>
							<Card vatos={post} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;