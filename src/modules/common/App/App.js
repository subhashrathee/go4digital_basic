import React from 'react'
import Header from '../Header/Header'
import Routes from '../Routes/Routes'

/**
* App class loads in the header and the routes used in the header.
*
* Props:      None
*
* State vars: None
*/
class App extends React.Component {
  render() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
    )
  }
}

export default App
