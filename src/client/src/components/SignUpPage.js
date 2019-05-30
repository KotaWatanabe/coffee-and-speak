import React from 'react'; // 'react'
import { User } from '../api/user';

export function SignUpPage(props) {
  const { onSignUp } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signUpParams = {
      first_name: fD.get('first_name'),
      last_name: fD.get('last_name'),
      email: fD.get('email'),
      password: fD.get('password'),
      password_confirmation: fD.get('password_confirmation'),
    };
    User.create(signUpParams).then((response) => {
      if (response.id) {
        onSignUp();
        props.history.push('/teachers');
      }
    });
  }
  return (
    <main>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" name="password_confirmation" id="password_confirmation" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </main>
  );
}
