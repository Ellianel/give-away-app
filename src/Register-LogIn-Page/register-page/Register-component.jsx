import React, { useState } from 'react';
import LoginRegisterNavigationPanel from '../Navigation Panel/LoginRegisternavigation-panel';
import decoration from "../../assets/Decoration.svg";
import FormRow from '../FormRow';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    email: '',
    password: '',
    password2: '',
}

const RegisterComponent = () => {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]:value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const {email, password, password2} = values;
        if(!email || !password || !password2) {
            alert('Please fill Out All Fields');
            return;
        } else if (password !== password2 || password.length < 6 ) {
            alert('Passwords do not match or password is too short');
            return;
        }
        console.log(values);
        setTimeout(()=>{
            navigate('/rejestracja');
        }, 3000)
    }

    return (
        <div className='page-wrapper login-wrapper'>
            <LoginRegisterNavigationPanel />
            <form className='form login-form' onSubmit={onSubmit}>
                <h2>Zarejestruj się</h2>
                <img src={decoration} alt='decoration-line'/>
                <div className="input-wrapper">
                <FormRow type='email' name='email' values={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange}/>
                <FormRow type='password' name='password2' labelText='powtórz hasło' values={values.password2} handleChange={handleChange}/>
                </div>
                <div className="login-register-btns">
                <button className='login-btn'>
                    <Link to='/login'>
                    Zaloguj się
                    </Link>
                    </button>
                <button className='register-btn active' type='submit'>Załóż konto</button>
                </div>
                
            </form>
        </div>
    
    );
};

export default RegisterComponent;