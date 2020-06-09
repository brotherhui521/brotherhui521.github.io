import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";
import MusicPlayer from "../shared/musicPlayer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      checked: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  //event needed? event.preventDefault() ?
  handleLogin(event) {
    this.toggleModal();
    alert(
      "The username is: " +
        this.username.value +
        " The password is: " +
        this.password.value +
        " Saved?:" +
        this.remember.checked
    );
    event.preventDefault();
  }

  //nightshift mode
  handleChecked(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="mr-auto" href="/">
              <span role="img">🎷</span>
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span>About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/projects">
                    <span className="fa fa-list fa-lg"></span>Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/photos">
                    <span className="fa fa-camera fa-lg"></span>Photographs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/interest">
                    <span className="fa fa-gamepad fa-lg"></span>Interest
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span>Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="primary" onClick={this.toggleModal}>
                <span className="fa fa-sign-in"></span>Sign In
              </Button>
            </NavItem>
          </Nav>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-8 col-sm-6">
                <h1>Welcome!</h1>
                <p>Hi, welcome to Kevin's website</p>
              </div>
              <div className="col-2 col-sm-2">
                <MusicPlayer />
              </div>
              <div className="col-2 col-sm-4">
                <label>
                  <Switch
                    className="align-middle"
                    height={20}
                    width={40}
                    checked={this.state.checked}
                    onChange={this.handleChecked}
                  ></Switch>
                  <span style={{ fontSize: "80%" }}>
                    Night Mode: {this.state.checked ? "On" : "Off"}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>Login</h3>
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username here"
                  innerRef={(input) => (this.username = input)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password here"
                  innerRef={(input) => (this.password = input)}
                ></Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  ></Input>
                  Remember this account?
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Log In
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
