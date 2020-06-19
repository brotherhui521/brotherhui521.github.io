import React, { Component } from "react";
import PictureCarousel from "../shared/PictureCarousel";
import $ from "jquery";
import Tiles from "../shared/Tiles";
import { pictureData } from "../shared/tempData/pictures";
import QuoteMachine from "../shared/projects/QuoteMachine";
import Timeline from "../shared/projects/Timeline";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.handleCarousel();
  }

  handleCarousel() {
    $("#mycarousel").carousel({ interval: 4500 });
  }

  handleButton() {
    if ($("#carousel-btn").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carousel-btn").children("span").removeClass("fa-pause");
      $("#carousel-btn").children("span").addClass("fa-play");
    } else if ($("#carousel-btn").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carousel-btn").children("span").removeClass("fa-play");
      $("#carousel-btn").children("span").addClass("fa-pause");
    }
  }

  render() {
    return (
      <div >
        <div className="container">
          <PictureCarousel handleButton={this.handleButton} />
          <h2>My Gallery</h2>
          <Tiles data={pictureData} />
          
          <QuoteMachine/>
          <Timeline />
        </div>
      </div>
    );
  }
}

export default Home;
