import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import ContactUsForm from './ContactUsForm'

storiesOf('ContactUsForm', module)
  .add('Default Contact Us Form', () => (
      <ContactUsForm />
  ));
