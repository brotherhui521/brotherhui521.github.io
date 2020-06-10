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
import MusicPlayer from "../shared/MusicPlayer";
import $ from "jquery";

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
  async handleChecked() {
    await this.setState({ checked: !this.state.checked });
    if (this.state.checked == true) {
      $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
      $(".jumbotron").removeClass("jumbotron").addClass("jumbotron-dark");
      $(".body-bright").removeClass("body-bright").addClass("body-dark");
    } else {
      $(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light");
      $(".jumbotron-dark").removeClass("jumbotron-dark").addClass("jumbotron");
      $(".body-dark").removeClass("body-dark").addClass("body-bright");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="mr-auto" href="/">
              <span role="img">🎷</span>
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto" onClick={this.toggleNav}>
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
                <NavItem style={{textAlign: 'left'}}>
                  <Button color="primary" onClick={this.toggleModal} style={{marginTop: 5}}>
                    <span className="fa fa-sign-in"></span>Sign In
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-7 col-lg-7">
                <h2>Welcome!</h2>
                <p>Hi, welcome to Kevin's website</p>
              </div>
              <div className="col-2">
                <MusicPlayer />
              </div>
              <div className="col-3">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="custom switch"
                    checked={this.state.checked}
                    onClick={() => this.handleChecked()}
                  />
                  <label className="custom-control-label" for="custom switch">
                    Night Mode: {this.state.checked ? "On" : "Off"}
                  </label>
                </div>
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
