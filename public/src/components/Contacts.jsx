import React, { useEffect, useState } from 'react';
import { Container } from '../pages/styles';
import logo from '../assets/logo.svg';
import { ChatContactsContainer } from './styles';

export default function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <ChatContactsContainer>
          <div className='brand'>
            <img src={currentUserImage} alt='avatar' />
            <h1>{currentUserName}</h1>
          </div>
          <div className='contacts'>
            {contacts.map((contact, index) => (
              <div
                className={`contact ${
                  index === currentSelected ? 'selected' : ''
                }`}
                key={contact.username}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className='avatar'>
                  <img src={contact.avatarImage} alt='avatar' />
                </div>
                <div className='username'>
                  <h3>{contact.username}</h3>
                </div>
              </div>
            ))}
          </div>
        </ChatContactsContainer>
      )}
    </>
  );
}
