import React, { FC } from 'react';
import styled from 'styled-components';
import { getColor, getPadding } from '@/theme';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  min-height: 30px;
  background-color: ${getColor('white')};
  text-align: center;
  padding: ${getPadding('large')};
`;

const AppHeader: FC = ({ children }) => (
  <HeaderContainer>{children}</HeaderContainer>
);

export default AppHeader;
