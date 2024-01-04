import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';
import { LogoutButton } from './styles';

function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <LogoutButton onClick={handleClick}>
      <BiPowerOff />
    </LogoutButton>
  );
}

export default Logout;
