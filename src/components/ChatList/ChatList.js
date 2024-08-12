import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import ChatItem from "./ChatItem";
import { ChatListContainer } from "./styles";

const ChatList = () => {
  const { chats, setCurrentChat } = useContext(ChatContext);

  return (
    <ChatListContainer>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          onClick={() => setCurrentChat(chat)}
        />
      ))}
    </ChatListContainer>
  );
};

export default ChatList;
