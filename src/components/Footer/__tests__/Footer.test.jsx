import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '../Footer';

const { container } = render(<Footer />)

test('Should render correctly', () => {
    expect(container).toMatchSnapshot()
});
