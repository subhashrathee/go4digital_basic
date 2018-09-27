import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import '../../../../public/css/external_css.css'

import Header from './Header'

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

storiesOf('Header', module)
  .add('Default Header', () => (
		<BrowserRouter>
  		<Header />
		</BrowserRouter>
	));
