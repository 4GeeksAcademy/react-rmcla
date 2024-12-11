import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			
				<div className="container-fluid">
					<div className="row col-9 mx-auto my-auto">
						<Jumbotron />
						<Card />
					</div>
				</div>
				
			<Footer />
		</div>

	
	);
};

export default Home;
