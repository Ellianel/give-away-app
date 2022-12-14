import React from 'react'
import decoration from '../../../assets/Decoration.svg'
import signature from '../../../assets/Signature.svg'

const AboutUs = () => {
	return (
		<>
			<section className='about-us-container' id='about-us'>

				<div className='about-us-info'>
					<div className='about-us-title'>
                        O nas
                    </div>
					<span className='deco-img'>
                        <img src={decoration} alt="deco" />
                    </span>
					<p className='about-us-txt'>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
					<span className='about-us-signature'>
                        <img src={signature} alt="signature" />
                    </span>
				</div>

				<span className='about-us-img'>

                </span>
			</section>
		</>
	)
}

export default AboutUs
