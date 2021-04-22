import React, { useState, useEffect, Fragment } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Container, Row, Col, } from 'react-bootstrap';
import Song from './Song/Song'
import YouTube from 'react-youtube';

function IFramePlayer({ songs }) {
  const [player, setPlayer] = useState([]);
  const [song, setSong] = useState({ title: '', vtuber: '', start: '', end: '', sourceId: '' });
  const [opts, setOpts] = useState({
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: 0,
      end: 1
    },
  });

  function addSongToPlayer(e) {
    const sourceid = e.currentTarget.dataset.sourceid;
    const title = e.currentTarget.dataset.title;
    const vtuber = e.currentTarget.dataset.vtuber;
    const start = e.currentTarget.dataset.start;
    const end = e.currentTarget.dataset.end;
    console.log(sourceid);
    console.log(title);
    console.log(vtuber);
    console.log(start);
    console.log(end);
    setSong({ title: title, vtuber: vtuber, start: start, end: end, sourceId: sourceid });
    setOpts({
      playerVars: {
        start: start,
        end: end
      },
    })
    // console.log(song.sourceid);
    // setPlayer(player => [...player, sourceid]);
  }

  return (
    <Row>
      <Col>
        {/* {player.map((player) => (
          <ListItem button data-sourceid={song.sourceId} data-title={song.title} data-vtuber={song.vtuber} data-start={song.start} data-end={song.end} onClick={addSongToPlayer}>
            <Song song={song} />
          </ListItem>
        ))} */}

        <YouTube videoId={song.sourceId} opts={opts}/>
      </Col>
      <Col>
        <List>
          {/* {songs.map(song => {console.log(song)})} */}
          {songs.map((song) => (
            <ListItem key={song._id} button data-sourceid={song.sourceId} data-title={song.title} data-vtuber={song.vtuber} data-start={song.start} data-end={song.end} onClick={addSongToPlayer}>
              <Song song={song} />
            </ListItem>
          ))}
        </List>
      </Col>
    </Row>
  );
}

export default IFramePlayer;