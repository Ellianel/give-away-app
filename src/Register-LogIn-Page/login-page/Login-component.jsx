import React, { useState } from 'react';
import LoginRegisterNavigationPanel from '../Navigation Panel/LoginRegisternavigation-panel';
import decoration from "../../assets/Decoration.svg";
import FormRow from '../FormRow';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    email: '',
    password: '',
}

const LoginComponent = () => {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]:value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const {email, password} = values;
        if(!email || !password) {
            alert('Please fill Out All Fields');
            return;
        }
        console.log(values);
        setTimeout(()=>{
            navigate('/logowanie');
        }, 3000)
    }

    return (
        <div className='page-wrapper login-wrapper'>
            <LoginRegisterNavigationPanel />
            <form className='form login-form' onSubmit={onSubmit}>
                <h2>Zaloguj się</h2>
                <img src={decoration} alt='decoration-line'/>
                <div className="input-wrapper">
                <FormRow type='email' name='email' values={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange}/>
                </div>
                <div className="login-register-btns">
                <button className='register-btn'>
                    <Link to='/register'>
                    Załóż konto
                    </Link>
                    </button>
                <button className='login-btn active' type='submit'>Zaloguj się</button>
                </div>
                
            </form>
        </div>
    
    );
};

export default LoginComponent;