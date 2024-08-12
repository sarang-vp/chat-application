import React, { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../../context/ChatContext";
import Message from "./Message";
import MessageInput from "../MessageInput/MessageInput";
import { ChatWindowContainer, MessagesContainer } from "./styles";

const ChatWindow = () => {
  const { currentChat, messages } = useContext(ChatContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  if (!currentChat) return <div>Select a chat to start messaging</div>;

  return (
    <ChatWindowContainer>
      <MessagesContainer>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <MessageInput />
    </ChatWindowContainer>
  );
};

export default ChatWindow;
