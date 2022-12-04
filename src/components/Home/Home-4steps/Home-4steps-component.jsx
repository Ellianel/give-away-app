import React from "react";
import { Link } from "react-router-dom";
import decoration from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/Icon1.svg";
import icon2 from "../../../assets/Icon2.svg";
import icon3 from "../../../assets/Icon3.svg";
import icon4 from "../../../assets/Icon4.svg";
// import HomeHeaderTitle from "../HomeHeader-title/Home-header-title";

const HomeStepsComponent = () => {
	return (
		<section className='four-steps'>
			<article className='four-steps-article'>
				<h2 id='steps'>Wystarczą 4 proste kroki</h2>
				<img className="deco" src={decoration} alt='decoration-line' />
			</article>
			<div className="container-four-steps">
				<div className='container-icon'>
					<img src={icon1} alt='icon-wybierz_rzeczy' />
					<h3>Wybierz rzeczy</h3>
					<hr />
					<h4>ubrania, zabawki, sprzęt i inne</h4>
				</div>

				<div className='container-icon'>
					<img src={icon2} alt='icon-spakuj' />
					<h3>Spakuj je</h3>
					<hr />
					<h4>skorzystaj z worków na śmieci</h4>
				</div>
				<div className='container-icon'>
					<img src={icon3} alt='icon-komu_oddac' />
					<h3>Zdecyduj komu chcesz oddać</h3>
					<hr />
					<h4>wybierz zaufane miejsce</h4>
				</div>
				<div className='container-icon'>
					<img src={icon4} alt='icon-kurier' />
					<h3>Zamów kuriera</h3>
					<hr />
					<h4>kurier przyjedzie w dogodnym terminie</h4>
				</div>
			</div>
			<button className='header-button'>
				<Link to='/login'>ODDAJ RZECZY</Link>
			</button>
		</section>
	);
};

export default HomeStepsComponent;
