import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Header component', () => {
  const component = renderer.create(
    <BrowserRouter>
		<Header />
		</BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
