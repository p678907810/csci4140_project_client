import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component{
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars:{
                autoplay:1,
            },
        };
        return <YouTube videoId="6LAKyyKu5Fo" opts={opts} onReady={this._onReady} />;
    }
    _onReady(event){
        event.target.pauseVideo();
    }
}
export default Player;