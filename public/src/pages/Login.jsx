import React, { useState, useEffect } from 'react';
import { FormContainer, SubmitButton } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, email } = values;
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        navigate('/');
      }
    }
  };

  const handleValidation = () => {
    const { password, email } = values;
    if (password === '') {
      toast.error('Email and Password is required', toastOptions);
      return false;
    } else if (email === '') {
      toast.error('Email and Password is required', toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className='brand'>
            <img src={Logo} alt='Logo'></img>
            <h1>Chatty</h1>
          </div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={(e) => handleChange(e)}
            value={values.email}
            min='3'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => handleChange(e)}
            value={values.password}
          />
          <SubmitButton type='submit'>Login</SubmitButton>
          <span>
            Don't have an account? <Link to='/register'>Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;
