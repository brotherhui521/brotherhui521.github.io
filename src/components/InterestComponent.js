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
          <div className="row" style={{ paddingTop: 20, marginBottom: 10}}>
            <div className="col col-12 col-lg-6" style={{overflow:'hidden', textAlign:'center'}}>
              <img src="/images/music.png" alt="music" style={{width:300}}/>
            </div>
            <div
              className="col col-12 col-lg-6"
              style={{ textAlign: "center", padding:0, display: 'flex', flexDirection:'column', justifyContent:'center' }}
            >
              <Zoom >
                <div >
                  <YoutubePlayer vId={Video1Id} />
                </div>
              </Zoom>

              
            </div>
          </div>

          <div className="row" style={{ marginBottom: 50 }}>
            <Zoom>
              <div style={{ margin: "auto" }}>
                <YoutubePlayer vId={Video2Id} />
              </div>
            </Zoom>
          </div>

          <div className="row">
          <div className="col col-12 col-lg-6" style={{overflow:'hidden', textAlign:'center'}}>
              <img src="/images/intel.png" alt="intel"  style={{width:150, marginRight:10, marginBottom:10}}/>
              <img src="/images/ncs2.png" alt="intel"  style={{width:170}}/>
            </div>
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
