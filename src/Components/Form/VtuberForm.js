import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import FileBase from 'react-file-base64';

import useStyles from './styles';
// import { createVtuber, updatePost } from '../../actions/posts';
import { createVtuber } from '../../actions/vtubers';


const VtuberForm = ({ currentId, setCurrentId }) => {
    const [vtuberData, setVtuberData] = useState({ _id: '', name: '', channelId: '', avatar: '' });
    const vtuber = useSelector((state) => (currentId ? state.vtuber.find((name) => name._id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        if (vtuber) setVtuberData(vtuber);
    }, [vtuber]);

    const clear = () => {
        setCurrentId(0);
        setVtuberData({ _id: '', name: '', channelId: '', avatar: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const pattern = /^(?:(http|https):\/\/[a-zA-Z-]*\.{0,1}[a-zA-Z-]{3,}\.[a-z]{2,})\/channel\/([a-zA-Z0-9_]{3,})$/;
        // let matchs = vtuberData.channelId.match(pattern);
        // let cId = matchs[2];
        // setVtuberData({ ...vtuberData, channelId: 'cId' });
        // console.log(vtuberData);
        dispatch(createVtuber(vtuberData));
        history.push("/");
        clear();
        

        // if (currentId === 0) {
        //   dispatch(createVtuber(vtuberData));
        //   history.push("/");
        // } else {
        // //   dispatch(updatePost(currentId, vtuberData));
        //   clear();
        // }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${vtuber.title}"` : 'Creating Vtuber'}</Typography>
                <TextField name="name" variant="outlined" label="Name" placeholder="Hoshimachi Suisei" fullWidth value={vtuberData.name} onChange={(e) => setVtuberData({ ...vtuberData, name: e.target.value })} />
                <TextField name="id" variant="outlined" label="Vtuber Id" placeholder="hoshimachi_suisei" fullWidth value={vtuberData._id} onChange={(e) => setVtuberData({ ...vtuberData, _id: e.target.value })} />
                <TextField name="url" variant="outlined" label="Channel URL" placeholder="https://www.youtube.com/channel/vtuber-music" fullWidth value={vtuberData.channelId} onChange={(e) => setVtuberData({ ...vtuberData, channelId: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default VtuberForm;
