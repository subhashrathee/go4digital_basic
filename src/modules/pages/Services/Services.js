import React from 'react'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import JSONContent from '../../config/content/services.js'

//Content passed into body component.
const content = JSONContent.services.join('');

/**
* Services page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class Services  extends React.Component {
  render () {
    return (
      <div>  
      <div className="hero-image-services"></div>
        <Body heading="Services" content={content}/>
        <Footer />
      </div>
    )
  }
}

export default Services;
