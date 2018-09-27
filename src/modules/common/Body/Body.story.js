import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Body from './Body'

storiesOf('Body', module)
  .add('Default Body', () => (
      <Body />
  ))
  .add('Body with test content', () => (
      <Body heading="A test heading" content="<p>Some test content</p>" />
  ))
;
