import React from "react";
import { useState } from "react";
import decoration from "../../../assets/Decoration.svg";
import FormRow from "../../../Register-LogIn-Page/FormRow";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const HomeContactComponent = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
  const postOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: values.name, email: values.email, message: values.message, })
  }
  const onSubmit = (e) => {
    e.preventDefault(e);
    console.log(values);
    fetch(URL, postOption)
    console.log("Form sent!");
    setValues(initialState);
    console.log(values);
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
                placeholder={values.name ? "" : "Krzysztof"}
                value={values.name}
                handleChange={handleChange}
              />
              <FormRow
                type="email"
                name="email"
                labelText="Wpisz swój email"
                placeholder={values.email ? "" : "abc@xyz.pl"}
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
              <label htmlFor="message" className="form-label">
                Wpisz swoją wiadomość
              </label>
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder={values.message ? "" : "Wpisz swoją wiadomość"}
                value={values.textValue}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="contact-btn" onClick={onSubmit}>
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
