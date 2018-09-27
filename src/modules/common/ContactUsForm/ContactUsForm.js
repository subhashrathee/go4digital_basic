//eslint-disable jsx-a11y/alt-text
import React from 'react';

//Config object used for emailjs vars
const Config = require('../../config/config.json');

//Styles used by html input elements
const styles = {
          error:  {
            "color"    : "red",
            "fontSize" : "12px",
            "marginTop": "5px"
          },
          hidden: {
            "display"  : "none"
          } 
      };

//The email validation regular expression we check against later.
//We ignore this error because it's a regex, not ES error (but linter picking it up).
// eslint-disable-next-line
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
* Contact us form component used to render and process the contact us form.
*
* Props: None
*
* State vars:
* @String email   The email address entered by the user.
* @String message The message entered by the user.
* @String emailErrorMessage The email error. This is updated if there's an error or not.
* @String messageErrorMessage The message error. This is updated if there's an error or not.1
*/
class ContactUsForm extends React.Component {

  /**
  * Default constructor. Sets up the state and methods we need bound.
  */
  constructor(props) {
    super(props);
    
    this.state = { email              : '',
                   message            : '',
                   forbiddenInput     : '',
                   emailErrorMessage  : '',
                   messageErrorMessage: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  /**
  * Method to handle the onChange events.
  * It calls the showInputError to validate the error input as the user 
  * enters a value.
  *
  * @param Object event The event to get the target element.
  * 
  * @return void
  */
  handleInputChange(event) { 

    const target = event.target;

    target.classList.add('active');

    this.setState({
      [target.name]: target.value
    });

    this.showInputError(target.name);
  }


  /**
  * Method to handle the subimt events.
  * It checks if the form is valid by calling the showFormErrors method.
  * It then forces an update so either we show the error messages or the
  * thankyou message.
  * 
  * @param Object event The event to get the target element.
  * 
  * @return void
  */
  handleSubmit(event) {
    event.preventDefault();
 
    var isValid = this.showFormErrors();
 
    if(isValid) {

      if( this.isNotSpamSubmission() ) {

        document.getElementById('thankYouMessage').style="display:inline;"
        document.getElementById('form').style="display:none;"

        window.emailjs.init(Config.emailjs_user);
        window.emailjs.send(Config.emailjs_service_id, Config.emailjs_template_id,
                    {email  : this.refs.email.value, 
                     message: this.refs.message.value});
      }
    }

    this.forceUpdate();

  }	

  /**
  * isSpamSubmission checks for a hidden field which should not be set and returns false if it is
  *
  * @param string spamField
  *
  * @return boolean Returns true if no spam
  */
  isNotSpamSubmission() {
  
    var spamFieldValue = this.state.forbiddenInput;

    if(spamFieldValue.length !== 0) {
      return false;
    }
    
    return true; 
  }

  /**
  * Shows the form errors (triggered by an onclick of the form).
  * It gets all the inputs and text areas (add more if you need), and 
  * uses the showInputError method to validate each field. 
  * 
  * @return Boolean Returns true if the form is valid, otherwise false if an error is found.
  */
  showFormErrors() {
    const inputs = document.querySelectorAll('input[type=email], textarea');

    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      if (!this.showInputError(input.name)) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  /**
  * showInputError method which shows the errors associated with the 
  * ref passed in. Called by onChange event for each input and showFormErrors
  * which is called by handleSubmit.
  * 
  * @param ref string The reference of the input which called it.
  */
  showInputError(ref) {
    var validity = this.refs[ref].validity;
    var label    = document.getElementById(`${ref}Label`).textContent;
    
    var newState = this.state;
    var errorString = '';      
    //This is a silly error. We are using it, just inside setState
    // eslint-disable-next-line
    var errorMessageField = `${ref}ErrorMessage`;

    const isEmail   = ref.indexOf('email') !== -1;

    //set custom validity for email, doesn't work on all browsers
    if(isEmail) {
      if(!emailRegEx.test(this.refs.email.value.toLowerCase())) {
        validity.email = false;
      } else {
        validity.email = true;
      }
    }
 
    //if our form isn't valid, then find what the error is and return the correct
    //message to the user. 
    if (!validity.valid) {

      if (validity.valueMissing) {
        errorString = `${label} is a required field`
      } else if (isEmail && !validity.email) {
        errorString = `${label} is not a valid email address`; 
      } 

      //dynamically update key in state
      newState[errorMessageField] = errorString;
      this.setState({newState});

      return false;
    }

    //if no errors, blank out the error messages
    newState[errorMessageField] = '';
    this.setState({newState});
    return true;
  }

  /**
  * Render method. This is used to render the form and the thankyou message.
  * Onchange events on the inputs validate the inputs via handleInputChange method and
  * there's a handleSubmit event.
  *
  * @return void
  */
  render() {
    return (
      <div className="main">
        <div id="thankYouMessage" style={styles.hidden}>
          <p>Thanks for submitting your enquiry. We'll get back to you shortly</p>
        </div> 
          <form id="form">
        <p>Call Sarita Singh for any enquiries on: 0414 043 200</p>
            <label id="emailLabel" style={styles.hidden}>
              Email
            </label>
            <input type="email" placeholder="Email address" value={this.state.email} name="email" id="email" ref="email" onChange={this.handleInputChange} required/>
            <div className="error" id="emailError" style={styles.error}>{this.state.emailErrorMessage}</div>
            <br />
            <label id="messageLabel" style={styles.hidden}>
              Message
            </label>
            <textarea rows="5" cols="30" placeholder="Message" value={this.state.message} name="message" id="message" ref="message" onChange={this.handleInputChange} required></textarea>
            <div className="error" id="messageError" style={styles.error}>{this.state.messageErrorMessage}</div>
            <br />
            <label id="forbiddenInputLabel" style={styles.hidden}></label>
            <input type="input" style={styles.hidden} name="forbiddenInput" id="forbiddenInput" ref="forbiddenInput" value={this.state.forbiddenInput} onChange={this.handleInputChange} />
            <input type="submit" name="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }

}


export default ContactUsForm;
