import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import About from './About'

storiesOf('Pages', module)
  .add('About', () => (
      <About />
  ));
