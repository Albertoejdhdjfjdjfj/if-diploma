import React from 'react';
import './SignUp.css';
import remove_icon from '../../assets/images/remove-icon.svg';

const SignUp = () => {
  return (
    <div className="sign_up">
      <h2>
        CREATE ACCOUNT <img src={remove_icon} />
      </h2>
      <div>
        <input type="text" placeholder="First Name" maxLength={25} />
        <input type="text" placeholder="Last Name" maxLength={15} />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" minLength={6} />
      </div>
      <div className="conventions">
        <div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">
            Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale,
            new arrivals and promotions.
          </label>
        </div>
        <p>
          By signing up you agree to <a href="#">Terms of Service</a> and{' '}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
      <button>SIGN UP</button>
      <span>
        <a href="#">I HAVE AN ACCOUNT</a>
      </span>
    </div>
  );
};

export default SignUp;
