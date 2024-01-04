import React from 'react';
import robot from '../assets/robot.gif';
import { ConversationSection } from './styles';

function Welcome({ currentUser }) {
  return (
    <ConversationSection>
      <img src={robot} alt='Robot' />
      <h1>Welcome {currentUser && currentUser.username}</h1>
    </ConversationSection>
  );
}

export default Welcome;
