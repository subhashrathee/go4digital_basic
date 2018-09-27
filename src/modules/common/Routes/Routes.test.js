import React from 'react';
import Routes from './Routes';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Route component', () => {
  const component = renderer.create(
    <BrowserRouter>
    <Routes />
    </BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
