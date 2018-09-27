import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('App component', () => {
  const component = renderer.create(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
