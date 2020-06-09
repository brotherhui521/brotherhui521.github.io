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
import PhotoDetail from "./PhotoDetailComponent";
//set up routes for website
import { Switch, withRouter, Route, Redirect } from "react-router-dom";

//tempdata
import {pictureData} from "../shared/tempData/pictures";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    const PhotoWithId=({match})=>{
      return(
        <PhotoDetail photo={pictureData.filter((photo)=>photo.id==parseInt(match.params.photoId, 10))[0]}>
          
        </PhotoDetail>
      )
    }

    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/photos" component={Photos} />
          <Route path="/photos/:photoId" component={PhotoWithId} />
          <Route path="/interest" component={Interest} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
