import React from "react";
import decoration from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/Icon1.svg";

const HomeStepsComponent = () => {
	return (
		<section>
			<h2 id='steps'>Wystarczą 4 proste kroki</h2>
			<img src={decoration} alt='decoration-line' />
			<div>
				<div> 
					<img src={icon1} alt='icon-wybierz_rzeczy' /> 
				</div>

				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	);
};

export default HomeStepsComponent;
