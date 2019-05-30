import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { WelcomePage } from "./WelcomePage"
import { NavBar } from "./NavBar"
import { SignInPage } from "./SignInPage"
import { SignUpPage } from "./SignUpPage"
import { TeacherIndexPage } from "./TeacherIndexPage"
import { TeacherShowPage } from "./TeacherShowPage"
import { TeacherNewPage } from "./TeacherNewPage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    //   loading: true,
    }
  }

  render() {
    // if (this.state.loading) {
    //   return <div />
    // }

    return (
      <BrowserRouter>
        <div>
        <header>
            <NavBar
            //   currentUser={this.state.currentUser}
            //   onSignOut={this.signOut}
            />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route
              exact
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />
              )}
            />
             <Route exact path="/teachers" component={TeacherIndexPage} />
             <Route exact path="/teachers/:id" component={TeacherShowPage} />
             <Route
              exact
              path="/questions/new"
              component={TeacherNewPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export { App }
