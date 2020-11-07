import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

it('renders Footer with all languages', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Frontend Developer')).toBeTruthy();
    expect(getByText('JS, React, Angular')).toBeTruthy();
    expect(getByText('Backend Developer')).toBeTruthy();
    expect(getByText('Java, C#, Phyton')).toBeTruthy();
});
