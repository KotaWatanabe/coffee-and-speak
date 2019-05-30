import React from "react"
import { NavLink } from "react-router-dom"
import { Session } from "../api/session"
import { Navbar, Nav} from 'react-bootstrap'
import image  from "../static/s_logo.png"

export function NavBar(props) {
  const { currentUser, onSignOut } = props
  function handleSignout(event) {
    event.preventDefault()

    Session.destroy().then(() => {
      onSignOut()
    })
  }

  return (
      <>
    <Navbar bg="secondary" expand="lg" className="nabvar">
    <Navbar.Brand href="/">
    <img src={image} style={{width:100, marginTop: -5}} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      {/* {currentUser ? (  */}
          {/* <Nav.Link href="#">Hello {current_user.first_name} </Nav.Link> */}
          <Nav.Link href="/">Hello name </Nav.Link>
          <Nav.Link href="/teachers">Find Teacher</Nav.Link>
          <Nav.Link href="/">Sign Out</Nav.Link>
    {/* //   ) : ( */}
        {/* <Nav.Link href="#">Sign In</Nav.Link> */}
      {/* )} */}
          <Nav.Link href="/sign_in">Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </>
  ) 
}
