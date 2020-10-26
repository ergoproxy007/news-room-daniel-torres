import * as React from 'react';
import { shallow } from 'enzyme';
import CardNews from './CardNews';

describe('Card', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CardNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
