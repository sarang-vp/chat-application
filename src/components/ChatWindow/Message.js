import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  max-width: 70%;
  ${props => props.isSent ? 'align-self: flex-end; background-color: #dcf8c6;' : 'align-self: flex-start; background-color: white;'}
`;

const Message = ({ message }) => {
  return (
    <MessageContainer isSent={message.isSent}>
      <p>{message.text}</p>
      <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
    </MessageContainer>
  );
};

export default Message;