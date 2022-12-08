import React from "react";
import { useState } from "react";
import decoration from "../../../assets/Decoration.svg";
import FormRow from "../../../Register-LogIn-Page/FormRow";

const initialState = {
  name: "",
  email: "",
  textValue:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export const HomeContactComponent = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <section className="home-contact">
      <div className="overlay">
        <div className="contact-wrapper">
          <h3>Skontaktuj się z nami</h3>
          <img className="deco" src={decoration} alt="decoration-line" />
          <form className="contact-form">
            <div className="contact-form-row">
              <FormRow
                type="text"
                name="name"
                labelText="Wpisz swoje imię"
                placeholder='Krzysztof'
                value={values.name}
                handleChange={handleChange}
              />
              <FormRow
                type="email"
                name="email"
                labelText="Wpisz swój email"
                placeholder='abc@xyz.pl'
                value={values.email}
                handleChange={handleChange}
              />
            </div>
            <div className="contact-form-textarea">
            {/* <FormRow
                type="textarea"
                name="textValue"
                labelText="Wpisz swoją wiadomość"
                value={values.textValue}
                handleChange={handleChange}
              /> */}
              <label for="textValue" class="form-label">
                Wpisz swoją wiadomość
              </label>
              <textarea id="textValue" placeholder={values.textValue}></textarea>
            </div>
            <button className="contact-btn">Wyślij</button>
          </form>
        </div>
      </div>
    </section>
  );
};
