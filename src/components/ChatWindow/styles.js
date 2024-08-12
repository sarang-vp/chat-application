import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
