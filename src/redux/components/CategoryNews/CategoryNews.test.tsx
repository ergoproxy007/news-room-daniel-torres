import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CategoryNews from './CategoryNews';

enzyme.configure({adapter: new Adapter()});

//Use array destructurig to create mock functions.
let [editTodo, toggleTodo, deleteTodo] = new Array(3).fill(jest.fn());

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    id: "7ae5bfa3-f0d4-4fd3-8a9b-61676d67a3c8",
    title: "Todo",
    project: "Project",
    done: false,
    url: "https://www.photos.com/a_photo",
    createdAt: "2017-03-02T23:04:38.003Z",
    editTodo: editTodo,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
    titleCategory: 'News Test'
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<CategoryNews {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Todo Card', () => {
    it('should render a card with the details of the Todo', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
      // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
      expect(enzymeWrapper.find('img').hasClass('ui image')).toBe(true);
      expect(enzymeWrapper.find('.header').text()).toBe(props.title);
      expect(enzymeWrapper.find('button.ui.basic.red.button').text()).toBe('Delete');
      // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
      expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
    });
});
