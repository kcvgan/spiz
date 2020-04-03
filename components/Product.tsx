import React, { FC } from 'react';
import styled from 'styled-components';
import { Product as ProductModel } from './Product.model';
import { getPadding, getColor, getBorderRadius } from '../theme';

interface Props extends ProductModel {
    className?: string;
}

const ProductContainer = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${getColor('white')};
    border-radius: ${getBorderRadius};
    padding: ${getPadding('medium')};
    display: flex;
    justify-content: space-between;
`;

const Name = styled.div``;

const Amount = styled.div``;

const Product: FC<Props> = ({ name, amount, className }) => (
    <ProductContainer className={className}>
        <Name>{name}</Name>
        <Amount>{amount}</Amount>
    </ProductContainer>
);

export default Product;
