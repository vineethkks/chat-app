import React, { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { ChatInputContainer, EmojiPickerContainer } from './styles';

function ChatInput({ handleSendMessage, currentChat }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [currentChat]);

  const handleEmojiClick = (emoji, _event) => {
    setValue((prevValue) => prevValue + emoji.emoji);
  };

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      handleSendMessage(value);
      setValue('');
    }
  };

  return (
    <>
      <ChatInputContainer>
        <div className='button-container'>
          <div className='emoji'>
            <BsEmojiSmileFill onClick={handleEmojiPickerToggle} />
          </div>
        </div>
        <form className='input-container' onSubmit={sendChat}>
          <input
            type='text'
            placeholder='Type your message here'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='submit'>
            <IoMdSend />
          </button>
        </form>
      </ChatInputContainer>
      <EmojiPickerContainer>
        {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
      </EmojiPickerContainer>
    </>
  );
}

export default ChatInput;
