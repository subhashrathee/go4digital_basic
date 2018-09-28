import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Services from '../../pages/Services/Services'
import About from '../../pages/About/About'
import Blog from '../../pages/Blog/Blog'
import Contact from '../../pages/Contact/Contact'

/**
* The main Route class. This sets up the routes for the header component.
*
* Props:      None
* 
* State vars: None
*/
class Routes extends React.Component {
  render() {
    return (
        <div>   
          <Route exact path="/" component={Home}/>
          <Route path="/services/" component={Services}/>
          <Route path="/about_us/" component={About}/>
          <Route path="/blog/" component={Blog}/>
          <Route path="/contact_us/" component={Contact}/>
        </div>
    )
  }
}

export default Routes;
