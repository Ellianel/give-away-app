import React from 'react';
import HomeHeaderComponent from '../HomeHeader/Home-header-component';
import HomeThreeColumns from '../HomeThreeColumns/Home-three-columns';
import HomeStepsComponent from '../Home-4steps/Home-4steps-component';
import AboutUs from '../Home-about-us/AboutUs-component';
import { HomeWhoHelping } from '../Home-who-helping/HomeWhoHelping';


const Home = () => {
    return (
        <div className='page-wrapper'>
            <HomeHeaderComponent />
            <HomeThreeColumns />
            <HomeStepsComponent />
            <AboutUs/>
            <HomeWhoHelping />
        </div>
    );
};

export default Home;