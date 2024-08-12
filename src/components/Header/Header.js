import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #075e54;
  color: white;
  padding: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>WhatsApp Clone</h1>
    </HeaderContainer>
  );
};

export default Header;