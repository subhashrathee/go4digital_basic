import React from 'react';
import Contact from './Contact';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Contact component', () => {
  const component = renderer.create(
    <Contact />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
