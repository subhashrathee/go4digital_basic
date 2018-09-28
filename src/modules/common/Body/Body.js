import React from 'react'
import PropTypes from 'prop-types'
import HtmlToReact from 'html-to-react'

var HtmlToReactParser = HtmlToReact.Parser;
var htmlToReactParser = new HtmlToReactParser();

/**
* Body component which takes in a content prop and parses it to render the content.
*
* Props: 
* @String content A content string which is rendered in the body of the page
* @String heading A content string which is rendered above the body of the page
*
* State vars: None
*/
class Body extends React.Component {
  render() {

  var reactElement = htmlToReactParser.parse(this.props.content.toString());

    return (
      <div className="main">
        <h1>
            {this.props.heading}
        </h1>

        {reactElement}
      </div>
    )
  }
}

Body.defaultProps = {
  content: '<p>Default body content</p>',
  heading: 'go4digital website and marketing agency'
}

Body.propTypes = {
  content: PropTypes.string,
  heading: PropTypes.string
}

export default Body;
