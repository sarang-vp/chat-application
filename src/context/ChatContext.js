import React, { createContext, useState, useEffect } from "react";
import useSocket from "../hooks/useSocket";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const socket = useSocket("http://your-backend-url");

  useEffect(() => {
    if (socket) {
      socket.on("message", handleNewMessage);
      socket.on("chats", handleChats);
    }
    return () => {
      if (socket) {
        socket.off("message", handleNewMessage);
        socket.off("chats", handleChats);
      }
    };
  }, [socket]);

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleChats = (updatedChats) => {
    setChats(updatedChats);
  };

  const sendMessage = (message) => {
    if (socket && currentChat) {
      socket.emit("sendMessage", { chatId: currentChat.id, message });
    }
  };

  return (
    <ChatContext.Provider
      value={{ currentChat, setCurrentChat, chats, messages, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
