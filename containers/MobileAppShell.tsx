import React from 'react';
import styled from 'styled-components';
import AppHeader from '@/components/AppHeader';
import NavBar from '@/components/NavBar';

const Root = styled.div`
  margin: 0;
  height: calc(100vh - 160px);
`;

const MobileAppShell = ({ children, header }) => (
  <Root>
    <AppHeader>{header}</AppHeader>
    {children}
    <NavBar />
  </Root>
);

export default MobileAppShell;
