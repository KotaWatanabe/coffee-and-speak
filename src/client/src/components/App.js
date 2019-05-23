import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { WelcomePage } from "./WelcomePage"

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
          <Switch>
            <Route exact path="/" component={WelcomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export { App }
