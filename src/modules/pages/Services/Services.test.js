import React from 'react';
import Services from './Services';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Services component', () => {
  const component = renderer.create(
    <Services />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
