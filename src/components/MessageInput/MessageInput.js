import React, { useState, useContext } from 'react';
import { FiSend } from 'react-icons/fi';
import { ChatContext } from '../../context/ChatContext';
import { InputContainer, StyledInput, SendButton } from './styles';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <SendButton type="submit">
        <FiSend />
      </SendButton>
    </InputContainer>
  );
};

export default MessageInput;