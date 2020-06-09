import React, { Component } from "react";
import PictureCarousel from "../shared/pictureCarousel";
import $ from "jquery";
import Tiles from "../shared/tiles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleButton = this.handleButton.bind(this);

    
  }
  pictureData = [
    { id: 1, name: "Drawing", image: "/images/Picture1.jpg" },
    { id: 2, name: "flower", image: "/images/Picture2.jpg" },
    { id: 3, name: "kevin", image: "/images/Picture3.jpg" },
    { id: 4, name: "duck", image: "/images/Picture4.jpg" },
    { id: 5, name: "night", image: "/images/Picture5.jpg" },
    { id: 6, name: "baby bird", image: "/images/Picture6.jpg" },
    { id: 7, name: "Cactus", image: "/images/Picture7.jpg" },
    { id: 8, name: "vegas v", image: "/images/Picture8.jpg" },
    { id: 9, name: "vegas h", image: "/images/Picture9.jpg" },
    { id: 10, name: "bird", image: "/images/Picture10.jpg" },
    { id: 11, name: "surfing man", image: "/images/Picture11.jpg" },
    { id: 12, name: "christmas tree", image: "/images/Picture12.jpg" },
    { id: 13, name: "birds standing", image: "/images/Picture13.jpg" },
    { id: 14, name: "Intel", image: "/images/Picture14.jpg" },
    { id: 15, name: "flour", image: "/images/Picture15.jpg" },
    { id: 16, name: "noodle", image: "/images/Picture16.jpg" },
    { id: 17, name: "burger", image: "/images/Picture17.jpg" },
    { id: 18, name: "road", image: "/images/Picture18.JPG" },
    { id: 19, name: "Sons", image: "/images/Picture19.jpeg" },
    { id: 20, name: "bed", image: "/images/Picture20.JPG" },
    { id: 21, name: "flower valley", image: "/images/Picture21.JPG" },
    
  ];

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
      <div className="body-bright">
        <div className="container">
          <div >
            <PictureCarousel handleButton={this.handleButton} />
            <h2>My Gallery</h2>
            <Tiles data={this.pictureData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
