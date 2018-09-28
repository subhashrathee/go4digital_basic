import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Blog from './Blog'

storiesOf('Pages', module)
  .add('Blog', () => (
      <Blog />
  ));
