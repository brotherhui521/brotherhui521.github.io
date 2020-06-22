import React, { Component } from "react";
import YoutubePlayer from "../shared/YoutubePlayer";
import Zoom from "react-reveal/Zoom";

const Video1Id = "TAn5pLdSbss";
const Video2Id = "10v1_BFj9fQ";
const Video3Id = "qlpWF4dPGcM";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" style={{ paddingTop: 20, marginBottom: 10 }}>
            <Zoom>
              <div style={{ margin: "auto" }}>
                <YoutubePlayer vId={Video1Id} />
              </div>
            </Zoom>
          </div>

          <div className="row" style={{ marginBottom: 10 }}>
            <Zoom>
              <div style={{ margin: "auto" }}>
                <YoutubePlayer vId={Video2Id} />
              </div>
            </Zoom>
          </div>

          <div className="row">
            <Zoom>
              <div style={{ margin: "auto" }}>
                <YoutubePlayer vId={Video3Id} />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
