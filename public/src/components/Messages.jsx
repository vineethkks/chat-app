import React from 'react';
import { MessageDiv, MessagesContainer } from '../pages/styles';

function Messages({ messages }) {
  return (
    <MessagesContainer>
      {messages.map((message, index) => (
        <MessageDiv key={message.message + index}>
          <span
            className={`message ${message.fromSelf ? 'sender' : 'receiver'}`}
          >
            {message.message}
          </span>
        </MessageDiv>
      ))}
    </MessagesContainer>
  );
}

export default Messages;
