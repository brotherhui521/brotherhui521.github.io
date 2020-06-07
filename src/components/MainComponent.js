import React, { Component } from "react";
//components
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Projects from "./ProjectsComponent";
import Photos from "./PhotosComponent";
import Interest from "./InterestComponent";
import Contact from "./ContactComponent";
//set up routes for website
import { Switch, withRouter, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route path="/home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Photos" component={Photos} />
          <Route path="/Interest" component={Interest} />
          <Route path="/Contact" component={Contact} />
          <Redirect to="/Home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
