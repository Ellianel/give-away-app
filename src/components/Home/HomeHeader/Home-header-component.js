import React from 'react';
import HeaderLogoComponent from "./Header-logo-component";
import HomeHeaderTitle from "./Home-header-title";
import {Link} from "react-router-dom";

const HomeHeaderComponent = () => {
    return (
        <section className='header-section'>
            <div className='header-left'>
                <HeaderLogoComponent/>
            </div>
            <div className='header-right'>
                <div className="navigation-panel">
                    <div className="user-panel">
                        <ul className="user-panel-list">
                            <li className="register">
                                <Link to='/register'>Zarejestruj</Link>
                            </li>
                            <li className="login">
                                <Link to='/login'>Zaloguj</Link>
                            </li>
                        </ul>
                    </div>
                    <nav className="navigation-bar">
                        <ul className="navbar-list">
                            <li>Start</li>
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>
                    <HomeHeaderTitle/>
                </div>
            </div>

        </section>
    );
};

export default HomeHeaderComponent;