import React from 'react';
import ChatHeader from './ChatHeader';
import Welcome from './Welcome';
import ChatContainer from './ChatContainer';
import { ChatContactsContainer } from './styles';

function ChatArea({ currentUser, selectedContact }) {
  return (
    <ChatContactsContainer>
      <ChatHeader selectedContact={selectedContact} />
      {selectedContact ? (
        <ChatContainer
          currentUser={currentUser}
          currentChat={selectedContact}
        />
      ) : (
        <Welcome currentUser={currentUser} />
      )}
    </ChatContactsContainer>
  );
}

export default ChatArea;
