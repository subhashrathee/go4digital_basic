import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

storiesOf('Footer', module)
  .add('Default Footer', () => (
      <Footer />
  ));
