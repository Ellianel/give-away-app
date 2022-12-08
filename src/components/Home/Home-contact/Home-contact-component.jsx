import React from "react";
import decoration from "../../../assets/Decoration.svg";

export const HomeContactComponent = () => {
	return (
		<section className='home-contact'>
			<div className='overlay'>
				<div>Skontaktuj się z nami</div>
				<img className='deco' src={decoration} alt='decoration-line' />
				<form>
					<button></button>
				</form>
			</div>
		</section>
	);
};
