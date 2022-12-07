import React from 'react'
import {Link} from "react-router-dom";

export const LoginRegisterNavigationPanel = () => {
  return (
    <section className='header-section login-page'>
        <div className='header-left'>
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
                        <li>
                            <Link to='/'>
                            Start
                            </Link>
                            </li>
                        <li>
                                O co chodzi?
                        </li>
                        <li>
                                O nas
                        </li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
export default LoginRegisterNavigationPanel;