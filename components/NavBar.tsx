import React, { FC } from 'react';
import styled from 'styled-components';

import { PlusIcon } from '@/theme/icons';
import { getColor, getPadding } from '@/theme';

const Container = styled.div`
  z-index: 2;
  min-height: 30px;
  background-color: ${getColor('white')};
  text-align: center;
  padding: ${getPadding('large')};
  position: sticky;
  bottom: 0;
`;

const NavBar: FC = () => (
  <Container>
    <PlusIcon />
  </Container>
);

export default NavBar;
