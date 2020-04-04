import React from 'react';
import styled from 'styled-components';

import { Product } from '@/components/Product.model';
import ProductList from '@/components/ProductList';
import { getColor, getPadding } from '@/theme';

const products: Product[] = [
  {
    name: 'Marchewka',
    amount: 1,
  },
  {
    name: 'Pomidor',
    amount: 2,
  },
  {
    name: 'Ser',
    amount: 4,
  },
];

const Root = styled.div`
  margin: 0;
  height: calc(100vh - 168px);
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  min-height: 30px;
  background-color: ${getColor('white')};
  text-align: center;
  padding: ${getPadding('large')};
`;

const BottomNav = styled.div`
  z-index: 2;
  min-height: 30px;
  background-color: ${getColor('white')};
  text-align: center;
  padding: ${getPadding('large')};
  position: sticky;
  bottom: 0;
`;

const Home = () => (
  <Root>
    <Header>Produkty</Header>
    <ProductList {...{ products }} />
    <BottomNav>Dodaj produkt</BottomNav>
  </Root>
);

export default Home;
