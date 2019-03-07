import React, { Component } from 'react';
class CalcForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstNameVal : '',
      firstNamePlaceholder: 'First Name*',
      emailVal : '',
      emailPlaceholder : 'Email Address*',
      successMessage: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
  }

  handleInput(event) {
     let newValue = event.target.value;
     let targetId = event.target;
     
     if (targetId.getAttribute('id') == 'name') {
        this.setState({firstNameVal: newValue});
     } else {
        this.setState({emailVal: newValue});
     }
  }

  formSubmission(event) {
      event.preventDefault();
      let email = document.getElementById('email');
      let name = document.getElementById('name');
      let successMessage = document.getElementById('successMessage');
      let emailVal = this.state.emailVal;
      let nameVal = this.state.firstNameVal;
      let emailRegEx = /\S+@\S+\.\S+/;
      
      //remove error classes on each submit
      email.classList.remove('error');
      name.classList.remove('error');
      
      if (!emailVal.match(emailRegEx) || nameVal == '') {
          if (!this.state.emailVal.match(emailRegEx)) {
             email.classList.add('error');
          }
          if (this.state.firstNameVal == '') {
             name.classList.add('error');
          }

      } else {
         this.setState({emailVal: ''});
         this.setState({firstNameVal: ''});
         this.setState({successMessage: 'Thank you! You have succeesfully been added to our mailing list.'});
         successMessage.classList.add('show');
      }
  }

  render() {
    return (
     <article className="calcForm">
         <p>We&#39;ve made it simple and affordable to take online payments.</p>
         <ul>
            <li className="txtYellow"><span>No additional gateway fees</span></li>
            <li className="txtYellow"><span>No annual or monthly fees</span></li>
            <li className="txtYellow"><span>Free fraud management tools</span></li>
            <li className="txtYellow"><span>Shopping cart integrations</span></li>
         </ul>

         <form className="signUpForm" action="" method="" onSubmit={this.formSubmission}>
            <span className="inputWrapper">
              <input id="name" type="text" name="fname" value={this.state.firstNameVal} placeholder={this.state.firstNamePlaceholder} onChange={this.handleInput} />
              <input id="email" type="text" name="email" value={this.state.emailVal} placeholder={this.state.emailPlaceholder} onChange={this.handleInput} />
            </span>
            <button type="submit" class="submit" value="Sign me up">Sign me up!</button>
         </form>
         <span id="successMessage">{this.state.successMessage}</span>
      </article>
    );
  }
}

export default CalcForm;