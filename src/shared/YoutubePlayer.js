import React, { Component } from 'react';
import YouTube from 'react-youtube';
class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() { 
        

        const opts = {
            maxheight: '500',
            maxwidth: '700',
            width: '370',
            height: '200',
            playerVars: {
                      // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
      
          return (
            <YouTube videoId={this.props.vId} opts={opts} onReady={this._onReady} />
          );
    }
}
 
export default YoutubePlayer;

