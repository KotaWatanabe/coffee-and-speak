import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { WelcomePage } from "./WelcomePage"
import { NavBar } from "./NavBar"

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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export { App }
