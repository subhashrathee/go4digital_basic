import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Footer component', () => {
  const component = renderer.create(
    <Footer />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
