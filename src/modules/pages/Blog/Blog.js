import React from 'react'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import JSONContent from '../../config/content/blog.js'

//Content passed into body component
const content = JSONContent.blog.join('');

/**
* About the class page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class Blog extends React.Component {
  render () {
    return (
      <div>
        <div  className="hero-image-blog"></div>
        <Body heading="Blog" content={content} />
        <Footer />
      </div>
    )
  }
}

export default Blog;
