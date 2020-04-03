import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-sticky-el';

import { Product } from '../components/Product.model';
import ProductList from '../components/ProductList';
import { getColor, getPadding } from '../theme';

const products: Product[] = [
    {
        name: 'Marchewka',
        amount: 1
    },
    {
        name: 'Pomidor',
        amount: 2
    },
    {
        name: 'Ser',
        amount: 4
    }
];

const Root = styled.div`
    margin: 0;
    height: 100vh;
`;

const Header = styled.div`
    z-index: 2;
    min-height: 30px;
    width: 100%;
    background-color: ${getColor('white')};
    text-align: center;
    padding: ${getPadding('large')};
`;

const BottomNav = styled.div`
    z-index: 2;
    min-height: 30px;
    width: 100%;
    background-color: ${getColor('white')};
    text-align: center;
    padding: ${getPadding('large')};
`;

const Home = () => (
    <Root>
        <Sticky>
            <Header>Produkty</Header>
        </Sticky>
        <ProductList {...{ products }} />
        <Sticky mode="bottom">
            <BottomNav>Produkty</BottomNav>
        </Sticky>
    </Root>
);

export default Home;
