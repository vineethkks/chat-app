import React, { useState, useEffect } from 'react';
import { ChatContainer } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';
import ChatArea from '../components/ChatArea';

function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [selectedContact, setSelectedContact] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login');
    } else {
      async function getContacts() {
        const currentUser = await JSON.parse(
          localStorage.getItem('chat-app-user'),
        );
        setCurrentUser(currentUser);

        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate('/setAvatar');
        }
      }
      getContacts();
    }
  }, []);

  const changeChat = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <ChatContainer>
      <div className='container'>
        <Contacts
          contacts={contacts}
          currentUser={currentUser}
          changeChat={changeChat}
        />
        <ChatArea currentUser={currentUser} selectedContact={selectedContact} />
      </div>
    </ChatContainer>
  );
}

export default Chat;
