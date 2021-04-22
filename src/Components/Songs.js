import React, { useState, useEffect, Fragment } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Song from './Song/Song'
import { Container, Row, Col, } from 'react-bootstrap';
import YouTube from 'react-youtube';
import IFramePlayer from './IFramePlayer';

const Songs = () => {
    const [songData, setSongData] = useState({ title: '', vtuber: '', start: '', end: '', sourceId: '' });
    const songs = useSelector((state) => state.songs);
    // console.log(songs);

    // useEffect(() => {
    //     if (songs) setSongData(songs);
    //     console.log("songs");
    // }, [songs]);

    const clickHandler = () => {
        // console.log(songs);
        // setSongData({ title: '123', vtuber: '', start: '', end: '', sourceId: '' });
    }
    return (
        // <Row>
        //     <Col>
        //         {/* <YouTube videoId={songs.sourceId} /> */}
        //         <IFramePlayer />
        //     </Col>
        //     <Col>
        //         <List>
        //             {songs.map((song) => (
        //                 <ListItem key={song._id} button onClick={clickHandler}>
        //                 {/* <ListItem key={song._id} button onClick={() => setSongData({ title: song.title, vtuber: song.vtuber, start: song.start, end: song.end, sourceId: song.sourceId })}> */}
        //                     <Song song={song} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </Col>
        // </Row>
        <IFramePlayer songs={songs} />

    );
}
export default Songs;