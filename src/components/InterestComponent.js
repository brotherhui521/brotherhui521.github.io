import React, { Component } from "react";
import YoutubePlayer from "../shared/YoutubePlayer";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-12" style={{textAlign:'center'}}>
              <YoutubePlayer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
