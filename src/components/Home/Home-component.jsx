import React from 'react';
import HomeHeaderComponent from "./HomeHeader/Home-header-component";
import HomeThreeColumns from "./HomeThreeColumns/Home-three-columns";
import HomeStepsComponent from "./Home-steps/Home-steps-component";

const Home = () => {
    return (
        <div className='page-wrapper'>
            <HomeHeaderComponent />
            <HomeThreeColumns />
            <HomeStepsComponent />
        </div>
    );
};

export default Home;