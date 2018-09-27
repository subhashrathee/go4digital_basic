import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Home component', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
