import React, { FC } from 'react';
import styled from 'styled-components';

import { ThinPlusIcon } from '@/theme/icons';
import { getColor, getPadding } from '@/theme';

const Container = styled.div`
  z-index: 2;
  min-height: 30px;
  background-color: ${getColor('white')};
  padding: ${getPadding('small')};
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
const IconButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70px;
  height: 40px;
  border: 3px solid white;
  border-radius: 20px;
  background-color: ${getColor('slightlyRed')};
  fill: ${getColor('white')};
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

const NavBar: FC = () => (
  <Container>
    <IconButton>
      <IconWrapper>
        <ThinPlusIcon />
      </IconWrapper>
    </IconButton>
  </Container>
);

export default NavBar;
