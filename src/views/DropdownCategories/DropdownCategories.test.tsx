// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import React from 'react';
import { render } from '@testing-library/react';
import DropdownCategories from './DropdownCategories';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders DropdownCategories with all categories', () => {
    const { getByText } = render(<Router> <DropdownCategories /> </Router>);
    const espectaculos = getByText('Espectáculos');
    const politica = getByText('Politíca');
    const internacional = getByText('Internacional');
    const tecnologia = getByText('Tecnología');
    const deportes = getByText('Deportes');

    expect(espectaculos).toBeTruthy();
    expect(politica).toBeTruthy();
    expect(internacional).toBeTruthy();
    expect(tecnologia).toBeTruthy();
    expect(deportes).toBeTruthy();
});
