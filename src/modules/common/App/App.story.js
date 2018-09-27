import React from 'react';
import App from './App'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'

storiesOf('App', module)
  .add('Base App', () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
