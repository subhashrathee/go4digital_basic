import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link} from 'react-router-dom'
import { shallow, configure, mount, find, ref, findWhere } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {

  it('renders a contctUsFormComponent', () => {
    const component = renderer.create(
      <ContactUsForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //handleInputChange event
  it('handles on input change event', () => {

    const output = mount(<ContactUsForm />);

    //when showInputError(ref) is called, simulate return false
    //use a stub
    output.instance().showInputError = jest.fn();
    output.update();

    //manually mock the event we pass in
    var mockEvent = {};
    mockEvent.target = new Object();
    mockEvent.target.classList = new Object();
    mockEvent.target.name = {validity:false};
    mockEvent.target.value = "John@test.com";

    //mock the target object
    mockEvent.target.classList.add = jest.fn();
   
    //our assertions
    expect(output.state().email).toEqual('');
  
    //find email input and test it for value change (with validity = false)
    output.state().email = mockEvent.target.value;
    output.find('input').first().simulate('change', {target:  mockEvent.target });
    expect(output.state().email).toEqual('John@test.com');

    //console.log(output.debug());
    //console.log(output.find('input').debug());

    mockEvent.target.name = {validity:true}; 
    //find email input and test it for value change (with validity = true)
    output.state().email = mockEvent.target.value;
    output.find('input').first().simulate('change', {target:  mockEvent.target });
    expect(output.state().email).toEqual('John@test.com');

    //handleinputchange for forbidden field
    output.state().forbiddenField = mockEvent.target.value;
  });

  //showInputError method
  it('handles showInputError method', () => {

    const output = mount(<ContactUsForm />, { attachTo: document.body });

    //mock the email validity ref
    output.ref('email').validity = new Object;

    expect(output.instance().showInputError('email')).toEqual(false);

    //mock the email ref value
    output.ref('email').value = 'valid@test.com';

    expect(output.instance().showInputError('email')).toEqual(false);

    //mock the validity valueMissing value
    output.ref('email').validity.valueMissing = true;

    expect(output.instance().showInputError('email')).toEqual(false);
  });

  //showFormErrors method
  it('handles showFormErrors', () => {
    const output = mount(<ContactUsForm />); 

    output.ref('email').validity = new Object;
    output.ref('email').validity.valid = false;
    output.ref('message').validity = new Object;
    output.ref('message').validity.valid = false;

    output.instance.showInputError = jest.fn();
    output.update();

    expect(output.instance().showFormErrors()).toEqual(false);
  });

  it('handles handlesubmit', () => {
    
    const output = mount(<ContactUsForm />);

    output.instance.showFormErrors = false;

    const eventVar = new Object();
    eventVar.preventDefault = jest.fn();

    //mock the input ref validity values
    output.ref('email').validity = new Object;
    output.ref('email').validity.valid = false;
    output.ref('message').validity = new Object;
    output.ref('message').validity.valid = false;

    //isValid is set to false, so expecting false
    output.instance().handleSubmit(eventVar)
   
    //compare the 2nd div (the thankyoumessage one)
    expect(output.find('div').at(1).prop('style').display).toEqual('none');

    //now we've tested with false, lets test a positive case

    //remock the email and message validity objects
    output.ref('email').validity.valid = true;
    output.ref('message').validity.valid = true;

    //mock the window emailjs functions to send emails.
    global.emailjs = new Object;
    global.emailjs.init = jest.fn();
    global.emailjs.send = jest.fn();

    //isValid is set to false, so expecting false
    output.instance().handleSubmit(eventVar)
    output.update();

    //compare the 2nd div (the thankyoumessage one)
    expect(output.find('div').at(1).prop('style').display).toEqual('none');
    //compare the next div to ensure the form is hidden

    //testing for hidden spam field, send emails if it's not populated
    expect(output.state().forbiddenInput).toEqual('');

    //don't send emails if it's populated
    output.state().forbiddenInput = 'test';
    expect(output.state().forbiddenInput).toEqual('test');
  });
  
  /**
  * Test the isNotSpamSubmission method
  */
  it('isNotSpamSubmission should work', () => {
    const output = mount(<ContactUsForm />);

    //test method with no data in it.
    output.state().forbiddenInput = '';
    expect(output.instance().isNotSpamSubmission()).toEqual(true);

    //test method with data in it.
    output.state().forbiddenInput = 'test';
    expect(output.instance().isNotSpamSubmission()).toEqual(false);

  });
});
