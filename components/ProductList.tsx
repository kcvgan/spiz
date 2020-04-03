import React, { FC } from 'react';
import styled from 'styled-components';
import { Product as ProductModel } from './Product.model';
import Product from './Product';

import { getPadding, getColor } from '../theme';

const ProductListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: ${getPadding('large')};
    background-color: ${getColor('lightGrey')};
    height: 100%;
`;

const ProductWithMargin = styled(Product)`
    margin-bottom: ${getPadding('small')};
`;

interface Props {
    products: ProductModel[];
}

const ProductList: FC<Props> = ({ products }) => (
    <ProductListContainer>
        {products.map(product => (
            <ProductWithMargin key={product.name} {...product} />
        ))}
    </ProductListContainer>
);

export default ProductList;
