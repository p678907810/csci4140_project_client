import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { createSong } from '../../actions/songs';


const SongForm = ({ currentId, setCurrentId }) => {
    const [songData, setSongData] = useState({ _id: '', name: '', channelId: '', avatar: '' });
    const song = useSelector((state) => (currentId ? state.song.find((name) => name._id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        if (song) setSongData(song);
    }, [song]);

    const clear = () => {
        setCurrentId(0);
        setSongData({ _id: '', name: '', channelId: '', avatar: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        dispatch(createSong(songData));
        history.push("/");
        clear();
        
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${song.title}"` : 'Creating song'}</Typography>
                <TextField name="name" variant="outlined" label="Name" placeholder="Hoshimachi Suisei" fullWidth value={songData.name} onChange={(e) => setSongData({ ...songData, name: e.target.value })} />
                <TextField name="id" variant="outlined" label="song Id" placeholder="hoshimachi_suisei" fullWidth value={songData._id} onChange={(e) => setSongData({ ...songData, _id: e.target.value })} />
                <TextField name="url" variant="outlined" label="Channel URL" placeholder="https://www.youtube.com/channel/song-music" fullWidth value={songData.channelId} onChange={(e) => setSongData({ ...songData, channelId: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default SongForm;
