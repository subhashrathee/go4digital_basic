import React from 'react'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import JSONContent from '../../config/content/about_us.js' 

//Content passed into body component
const content = JSONContent.about_us.join('');

/**
* About the class page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class About extends React.Component {
  render () {
    return (
      <div>
        <div  className="hero-image-about"></div>
        <Body heading="About the class" content={content} />
        <Footer />
      </div>
    )
  }
}

export default About;
