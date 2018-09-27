import React from 'react'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import JSONContent from '../../config/content/services.js'

//Content used to build instagram links
const instagram_link = JSONContent.services_instagram_link.join('');

//Content passed into body component.
var content = JSONContent.services.join('');

//adding our instagram links to content
content +=  "<p>" + 
            instagram_link.replace('VID_ID', 'BZe5g8QjVyw') + 
            instagram_link.replace('VID_ID', 'BcUS3zMDONZ') + 
            instagram_link.replace('VID_ID', 'BZXa8wgjSr7') + 
            "</p>";

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
