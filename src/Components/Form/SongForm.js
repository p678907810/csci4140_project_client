import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { createSong } from '../../actions/songs';


const SongForm = ({ currentId, setCurrentId }) => {
    const [songData, setSongData] = useState({ title: '', vtuber: '', start: '', end: '', sourceId: '' });
    // const song = useSelector((state) => (currentId ? state.song.find((name) => name._id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    // useEffect(() => {
    //     if (song) setSongData(song);
    // }, [song]);

    const clear = () => {
        setCurrentId(0);
        setSongData({ title: '', vtuber: '', start: '', end: '', sourceId: '' });
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
                <Typography variant="h6">Creating song</Typography>
                <TextField name="title" variant="outlined" label="Title" placeholder="" fullWidth value={songData.title} onChange={(e) => setSongData({ ...songData, title: e.target.value })} />
                <TextField name="vtuber" variant="outlined" label="Vtuber Id" placeholder="" fullWidth value={songData.vtuber} onChange={(e) => setSongData({ ...songData, vtuber: e.target.value })} />
                <TextField name="start" variant="outlined" label="Start Time" placeholder="hh:mm:ss" fullWidth value={songData.start} onChange={(e) => setSongData({ ...songData, start: e.target.value })} />
                <TextField name="end" variant="outlined" label="End Time" placeholder="hh:mm:ss" fullWidth value={songData.end} onChange={(e) => setSongData({ ...songData, end: e.target.value })} />
                <TextField name="url" variant="outlined" label="Video URL" placeholder="https://www.youtube.com/watch?v=example" fullWidth value={songData.sourceId} onChange={(e) => setSongData({ ...songData, sourceId: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default SongForm;
