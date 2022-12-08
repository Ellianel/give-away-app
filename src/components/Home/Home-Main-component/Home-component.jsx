import React from "react";
import HomeHeaderComponent from "../HomeHeader/Home-header-component";
import HomeThreeColumns from "../HomeThreeColumns/Home-three-columns";
import HomeStepsComponent from "../Home-4steps/Home-4steps-component";
import AboutUs from "../Home-about-us/AboutUs-component";
import { HomeWhoHelping } from "../Home-who-helping/HomeWhoHelping";
import { HomeContactComponent } from "../Home-contact/Home-contact-component";

const Home = () => {
	return (
		<div className='page-wrapper'>
			<HomeHeaderComponent />
			<HomeThreeColumns />
			<HomeStepsComponent />
			<AboutUs />
			<HomeWhoHelping />
			<HomeContactComponent />
		</div>
	);
};

export default Home;
