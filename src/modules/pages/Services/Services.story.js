import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Services from './Services'

storiesOf('Pages', module)
  .add('Services', () => (
      <Services />
  ));
