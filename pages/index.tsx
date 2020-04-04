import React from 'react';

import { Product } from '@/components/Product.model';
import ProductList from '@/components/ProductList';
import MobileAppShell from '@/containers/MobileAppShell';

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

const Home = () => (
  <MobileAppShell header={'produkty'}>
    <ProductList {...{ products }} />
  </MobileAppShell>
);

export default Home;
