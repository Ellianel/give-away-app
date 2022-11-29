import React from 'react';
import decoration from "../../../assets/Decoration.svg"

const HomeHeaderTitle = () => {
    return (
        <header className='home-header'>
            <article className='home-header-article'>
                <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt='decoration-line' />
            </article>
            <div className='home-header-buttons'>
                <button className='header-button'>ODDAJ RZECZY</button>
                <button className='header-button'>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        </header>
    );
};

export default HomeHeaderTitle;