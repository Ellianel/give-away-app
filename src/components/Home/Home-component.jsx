import React from 'react';
import HomeHeaderComponent from "./HomeHeader/Home-header-component";
import HomeThreeColumns from "./HomeThreeColumns/Home-three-columns";

const Home = () => {
    return (
        <div className='page-wrapper'>
            <HomeHeaderComponent />
            <HomeThreeColumns />
        </div>
    );
};

export default Home;