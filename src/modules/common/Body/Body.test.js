import React from 'react';
import Body from './Body';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('Body component', () => {
  const component = renderer.create(
    <Body />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
