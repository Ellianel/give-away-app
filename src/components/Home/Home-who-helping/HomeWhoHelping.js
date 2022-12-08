import React, { useState } from "react";
import decoration from "../../../assets/Decoration.svg";

// ZAPYTAĆ GRZEGORZA jak wystylizować whos helping, zeby wszystko bylo na srodku
// zapytać jak uzyć useEffect do przeładowania strony po zmianie stanu w poniższych funkcjach clickHandle

export const HomeWhoHelping = () => {
    const [fundationState, setFundationState] = useState(true);
    const [organizationState, setOrganizationState] = useState(false);
    const [collectionState, setColectionState] = useState(false);
    // poniżej po kliknięciu zmieniamy stany
    const fundationClickHandle = () => {
        setFundationState(true);
        setOrganizationState(false);
        setColectionState(false);
    }
    const organizationClickHandle = () => {
        setFundationState(false);
        setOrganizationState(true);
        setColectionState(false);
    }
    const collectionClickHandle = () => {
        setFundationState(false);
        setOrganizationState(false);
        setColectionState(true); 
    }
  return (
    <section className="helping" id="helping">
      <div className="helping-title">Komu pomagamy?</div>
      <img className="deco" src={decoration} alt="decoration-line" />
      <div className="whos-helping">
        {/* w zależności od stanu jaki aktualnie posiadamy nadaje klasy */}
        <div className={fundationState ? "whos-helping-btn active" : "whos-helping-btn"} onClick={fundationClickHandle}>Fundacjom</div>
        <div className={organizationState ? "whos-helping-btn active" : "whos-helping-btn"} onClick={organizationClickHandle}>Organizacjom<br/>pozarządowym</div>
        <div className={collectionState ? "whos-helping-btn active" : "whos-helping-btn"} onClick={collectionClickHandle}>Lokalnym<br/>zbiórkom</div>
      </div>
      <article className="helping-info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</article>
      <div className="helping-list-container">
        <div className="helping-list">
          <h3>
            Fundacja "Dbam o Zdrowie"{" "}
            <span>
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </span>
          </h3>
          <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </div>
        <hr />
        <div className="helping-list">
          <h3>
            Fundacja “Dla dzieci”{" "}
            <span>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>
          </h3>
          <p>ubrania, meble, zabawki</p>
        </div>
        <hr />
        <div className="helping-list">
          <h3>
            Fundacja “Bez domu”{" "}
            <span>
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </span>
          </h3>
          <p>ubrania, jedzenie, ciepłe koce</p>
        </div>
        <div className="helping-pagination">
          <button className="helping-btn active">1</button>
          <button className="helping-btn">2</button>
          <button className="helping-btn">3</button>
        </div>
      </div>
    </section>
  );
};
