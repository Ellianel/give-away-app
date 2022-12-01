import React from 'react';

const HomeThreeColumns = () => {
    return (
        <section className='three-columns-wrapper' id='three-columns'>
            <div className="column">
                <h2>10</h2>
                <h3>Oddanych worków</h3>
                <div className="column-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem dolores dolorum excepturi expedita maxime rerum sint totam. Deleniti, quis?</div>
            </div>
            <div className="column">
                <h2>5</h2>
                <h3>Wspartych organizacji</h3>
                <div className="column-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor doloremque dolores dolorum eligendi harum ipsum laudantium sed, veniam veritatis!</div>
            </div>
            <div className="column">
                <h2>7</h2>
                <h3>Zorganizowanych zbiórek</h3>
                <div className="column-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa hic laborum magnam minima quaerat qui repellat saepe sint velit.</div>
            </div>
        </section>
    );
};

export default HomeThreeColumns;