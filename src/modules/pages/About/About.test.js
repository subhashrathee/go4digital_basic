import React from 'react';
import About from './About';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('About component', () => {
  const component = renderer.create(
    <About />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
