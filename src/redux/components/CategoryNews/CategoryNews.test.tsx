import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import CategoryNews from './CategoryNews';

import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

enzyme.configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({});

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    id: "7ae5bfa3-f0d4-4fd3-8a9b-61676d67a3c8",
    project: "Project",
    newsItems : [{
        img_url: "https://www.photos.com/a_photo"
    }],
    done: false,
    createdAt: "2017-03-02T23:04:38.003Z",
    titleCategory: 'Hola'
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(
    <Provider store={store}>
        <CategoryNews {...props} />
    </Provider>
  );
  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Todo Card', () => {
    it('should render a card with the details of the Todo', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
      //enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
      expect(enzymeWrapper.find('img')).toHaveLength(0);
      expect(enzymeWrapper.exists(Header)).toEqual(true);
      expect(enzymeWrapper.containsMatchingElement(<div data-foo="foo">Hello</div>)).toEqual(true);
      expect(enzymeWrapper.find('button.ui.basic.red.button').text()).toBe('Delete');
      //enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
      expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
    });
});
