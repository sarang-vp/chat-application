import React from 'react';
import styled from 'styled-components';

const ChatItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ChatItem = ({ chat, onClick }) => {
  return (
    <ChatItemContainer onClick={onClick}>
      <h3>{chat.name}</h3>
      <p>{chat.lastMessage}</p>
    </ChatItemContainer>
  );
};

export default ChatItem;