import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import { useDispatch } from 'react-redux';
import Songs from './Songs';
import { getSongsByVtuber } from '../actions/songs';
const VtuberList = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const {vtuber} = useParams();
    useEffect(() => {
        dispatch(getSongsByVtuber(vtuber))
    }, [currentId, dispatch]);

    return (
        <Songs currentId={currentId} setCurrentId={setCurrentId} />
    );
}
export default VtuberList;