import React from 'react';
import styled from 'styled-components';
import AppHeader from '@/components/AppHeader';
import NavBar from '@/components/NavBar';

const Root = styled.div`
  margin: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 54px - 56px - 18px - 18px);
`;

const MobileAppShell = ({ children, header }) => (
  <Root>
    <AppHeader>{header}</AppHeader>
    <ContentContainer>{children}</ContentContainer>
    <NavBar />
  </Root>
);

export default MobileAppShell;
