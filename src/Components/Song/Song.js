import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ListItemText } from '@material-ui/core';

const Song = ({ song }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Fragment>
            <ListItemText primary={song.title} secondary={song.vtuber} />
        </Fragment>
    );
};

export default Song;