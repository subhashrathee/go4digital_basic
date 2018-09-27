import React from 'react'

//const date object used
const dt = new Date();

/**
* Footer class used by all page components.
* It has a copyright symbol along with the year
*
* Props:      None
*
* State vars: None
*/
class Footer extends React.Component {
  render() {
    return (
      <footer>  
        <p>&copy; {dt.getFullYear()} go4digital. All rights reserved.</p>
      </footer>
    )
  }
}

export default Footer;
