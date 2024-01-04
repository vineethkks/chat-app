import React from 'react';
import { Header } from './styles';
import Logout from './Logout';

function ChatHeader({ selectedContact }) {
  return (
    <Header>
      {selectedContact ? (
        <div className='contact-info'>
          <img src={selectedContact.avatarImage} alt='avatar' />
          <h1>{selectedContact.username}</h1>
        </div>
      ) : (
        <div></div>
      )}
      <Logout />
    </Header>
  );
}

export default ChatHeader;
