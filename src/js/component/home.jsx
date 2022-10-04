import React from "react";
import Nabvar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="conteiner">
			<Nabvar /> </div>
			<br />
			<Jumbotron />
			<br />
			<Card />
			<br />
			<Footer />
		</div>
	);
};

export default Home;
