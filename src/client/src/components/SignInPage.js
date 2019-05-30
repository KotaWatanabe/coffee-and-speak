import React from "react"; // 'react'
import { Session } from "../api/session";

export function SignInPage(props) {
  const { onSignIn } = props;
  console.log(onSignIn);

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signInParams = {
      email: fD.get("email"),
      password: fD.get("password")
    };

    Session.create(signInParams).then(response => {
      if (response.id) {
        onSignIn();
        props.history.push("/teachers");
      }
    });
  }
  return (
    <main className="Page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input label="Email" type="email" name="email" />
        </div>
        <div>
          <input label="Password" type="password" name="password" />
        </div>
        <input
          text="Sign In"
          type="submit"
        />
      </form>
    </main>
  );
}

// export default SignInPage;
