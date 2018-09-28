import React from 'react'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import JSONContent from '../../config/content/home.js'

//content passed into body component
const content = JSONContent.homepage;

/**
* Home page component used to render the page.
* This is the default route for the site.
*
* Props:      None
* 
* State vars: None
*/
class Home extends React.Component {
  render() {
    return (
      <div> 
        <div className="hero-image-home"></div>
        <Body heading="go4digital: digital journey together" content={content}/>
        <Footer />
      </div>
    )
  }
}

export default Home;
