import React from 'react';
import { render } from '@testing-library/react';

import Product from './Product';

describe('Product component', () => {
    it("doesn't explode", async () => {
        const wrapper = render(<Product />);

        expect(wrapper).toBeTruthy();
    });
});
