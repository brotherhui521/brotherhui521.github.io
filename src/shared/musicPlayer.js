import React, { Component } from "react";
import ReactHowler from "react-howler";
import { Button } from "reactstrap";
import $ from "jquery";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    // The two files that we'll switch between
    this.sources = ["/blue.mp3", "/beats.mp3"];

    this.state = {
      currentSrcIndex: 0,
      playing: false,
    };

    this.handleSwap = this.handleSwap.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
  }

  handleSwap() {
    // Just switch back and forth between 0 and 1
    let nextIndex = this.state.currentSrcIndex === 0 ? 1 : 0;
    this.setState({ currentSrcIndex: nextIndex });
  }

  handleMusic() {
    if ($("span").hasClass("fa-play")) {
      this.setState({
        playing: true,
      });
      $("#span").removeClass("fa-play");
      $("#span").addClass("fa-pause");
    } else {
      this.setState({
        playing: false,
      });
      $("#span").removeClass("fa-pause");
      $("#span").addClass("fa-play");
    }
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playing}
          // When the sources are swapped we'll pass a new
          // src prop into ReactHowler which will destroy our
          // currently playing Howler.js and initialize
          // a new Howler.js instance
          //src={this.sources[this.state.currentSrcIndex]}
          src={this.sources[this.state.currentSrcIndex]}
        />

        <Button onClick={this.handleMusic} style={{marginRight: 3, backgroundColor:"#ee8572"}}>
          <span id="span" className="fa fa-play fa-xs"></span>
        </Button>
        <Button className="full" onClick={this.handleSwap} style={{backgroundColor:"#ee8572"}}>
          <span id="span" className="fa fa-fast-forward "></span>
        </Button>
        <p>Now playing {this.sources[this.state.currentSrcIndex].split(".mp3")[0]}</p>
      </div>
    );
  }
}

export default MusicPlayer;
