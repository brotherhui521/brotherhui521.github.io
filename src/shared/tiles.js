import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPictures: 5,
      currentPicture: 0,
      pictures: [],
    };
  }
  componentDidMount() {
    this.renderPictures();
  }

  renderPictures() {
    if (this.state.currentPicture >=this.props.data.length) {
      console.log("no more")
      $('#loadmorePic').addClass('disabled');
    } else {
      let pictures = [];
      
      for (
        var i = this.state.currentPicture;
        i < this.state.numberOfPictures;
        i++
      ) {
        pictures.push(
          <Tile data={this.props.data[i]} key={this.props.data[i].id} />
        );
      }
      this.setState({
        pictures: [...this.state.pictures].concat(pictures),
        currentPicture: this.state.currentPicture + 5,
        numberOfPictures: this.state.numberOfPictures+5,
      });
    }
  }
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key

    return (
      <div>
        <div className="tiles row">{this.state.pictures}</div>
        <div className="row">
          <button id="loadmorePic" className="btn btn-primary" onClick={()=>this.renderPictures()}>View More</button>
        </div>
      </div>
    );
  }
}

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false,
    };
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true,
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {
      width: "200px",
      height: "200px",
      
    };
    let headerStyle = {};
    let zoom = {};
    // When tile clicked

    return (
      <div className="tile col col-6 col-md-4 col-lg-3">
        <Link to={`/photos/${this.props.data.id}`}>
          <img
            onMouseEnter={this._mouseEnter}
            onMouseLeave={this._mouseLeave}
            //onClick={this._clickHandler}
            src={this.props.data.image}
            alt={this.props.data.name}
            style={tileStyle}
          />
        </Link>
      </div>
    );
  }
}

export default Tiles;
