import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './modules/common/App/App';

/**
* Default render method.
* Wrap the App in BrowserRouter tags as we use it in the header
* which is used in all pages 
*/
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
