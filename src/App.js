import React from 'react';
import styled from 'styled-components';
import { ChatProvider } from './context/ChatContext';
import Header from './components/Header/Header';
import ChatList from './components/ChatList/ChatList';
import ChatWindow from './components/ChatWindow/ChatWindow';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Sidebar = styled.div`
  width: 30%;
  border-right: 1px solid #d1d7db;
`;

const MainContent = styled.div`
  width: 70%;
`;

function App() {
  return (
    <ChatProvider>
      <AppContainer>
        <Sidebar>
          <Header />
          <ChatList />
        </Sidebar>
        <MainContent>
          <ChatWindow />
        </MainContent>
      </AppContainer>
    </ChatProvider>
  );
}

export default App;