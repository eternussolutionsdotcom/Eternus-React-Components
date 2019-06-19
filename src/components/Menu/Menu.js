import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav,  NavDropdown, Form,FormControl ,Button  } from 'react-bootstrap';

const Menu = props => {
  
    return (
        
        <Navbar  expand="lg">
        <Navbar.Brand href="#">Menu Options</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" data-feed='NavData.jason'>
              {/* <NavDropdown.Item href="#action/3.1">Option1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Option2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Option3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Option4</NavDropdown.Item>
              <NavDropdown.Divider />    */}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

Menu.propTypes = {

}

export default Menu
