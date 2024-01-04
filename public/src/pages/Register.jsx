import React, { useState, useEffect } from 'react';
import { FormContainer, SubmitButton } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      const { password, username, email } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        navigate('/setAvatar');
      }
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password.length < 8) {
      toast.error(
        'Password should be equal or greater than 8 characters',
        toastOptions,
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error('Confirm Password should match with Password', toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error('Username should be greater than 3 characters', toastOptions);
      return false;
    } else if (email === '') {
      toast.error('email is required', toastOptions);
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
          <div class='brand'>
            <img src={Logo} alt='Logo'></img>
            <h1>Chatty</h1>
          </div>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={(e) => handleChange(e)}
            value={values.username}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={(e) => handleChange(e)}
            value={values.email}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => handleChange(e)}
            value={values.password}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={(e) => handleChange(e)}
            value={values.confirmPassword}
          />
          <SubmitButton type='submit'>Create User</SubmitButton>
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
