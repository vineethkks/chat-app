import React, { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import Messages from './Messages';
import { ChatContainerDiv } from './styles';
import axios from 'axios';
import { getAllMessages, sendMessageRoute, host } from '../utils/APIRoutes';
import { ToastContainer, toast } from 'react-toastify';
import { io } from 'socket.io-client';

function ChatContainer({ currentUser, currentChat }) {
  const socket = useRef();
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);
  const [arrivalMsg, setArrivalMsg] = useState(null);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    if (currentChat) {
      socket.current = io(host);
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentChat]);

  useEffect(() => {
    setMessages([]);
    (async function fetchChatMessages() {
      const response = await axios.post(getAllMessages, {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    })();
  }, [currentChat]);

  const handleSendMessage = async (msg) => {
    const response = await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
    if (response.status === false) {
      toast.error('Email and Password is required', toastOptions);
    }
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', (msg) => {
        console.log(msg);
        setArrivalMsg({
          fromSelf: false,
          message: msg,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMsg && setMessages((prev) => [...prev, arrivalMsg]);
  }, [arrivalMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  return (
    <>
      <ChatContainerDiv>
        <Messages messages={messages} socket={socket} />
        <ChatInput
          handleSendMessage={handleSendMessage}
          currentChat={currentChat}
        />
      </ChatContainerDiv>
      <ToastContainer />
    </>
  );
}

export default ChatContainer;
