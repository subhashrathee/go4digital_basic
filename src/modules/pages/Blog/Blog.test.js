import React from 'react';
import Blog from './Blog';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Blog component', () => {
  const component = renderer.create(
    <Blog />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
