import React from 'react';
import 'tachyons';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      ieeeIDValid: true,
      passValid: true
    }
  }

  /**
   * Validate an email
   * @param {string} ieeeid 
   * @returns {boolean}
   */
  validateID(ieeeid) {
    const re = /\d{10}/;
    return re.test(String(ieeeid).toLowerCase());
  }

  /**
   * Validate a password
   * @param {string} password 
   * @param {boolean}
   */
  validatePassword(password) {
    const re = /.{7}.+/;
    return re.test(String(password).toLowerCase());
  }

  /**
   * Get classes for email
   * @param {boolean} state
   * @returns {string}
   */
  getInputClasses(state) {
    let base = 'pa2 input-reset ba bg-transparent w-100';
    if (!state) {
      base += ' b--red';
    }
    return base;
  }



  onIDChange = (event) => {
    console.warn(this.validateID(event.target.value)); 
    this.setState({
      signInEmail: event.target.value,
      ieeeIDValid: this.validateID(event.target.value)
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      signInPassword: event.target.value,
      passValid: this.validatePassword(event.target.value)
    })

  }

  /**
   * 
   * @param {React.MouseEvent<HTMLInputElement, MouseEvent>} event 
   */
  onSubmitSignIn = (event) => {
    // Put some assertion code to submit only if 
    // ids & pass are valid
    fetch('http://localhost:3000/api/auth', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json(),(rejectionreason)=>console.error)
      .then(user => {
        if (user.id) {
          // To set the state of various state variables upon getting the response
          // this.state.loadUser(user)
          // this.props.onRouteChange('home'); 
        }
      })
  }

  render() {
    const { onRouteChange } = this.props; //for later use
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className={this.getInputClasses(this.state.ieeeIDValid)}
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="IEEE ID"
                  onChange={this.onIDChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className={this.getInputClasses(this.state.passValid)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="submitContainer">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}
export default SignIn;