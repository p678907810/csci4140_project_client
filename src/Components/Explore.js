import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Songs from './Songs';
import { getSongs } from '../actions/songs';
const Explore = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongs())
    }, [currentId, dispatch]);

    return (
        <Songs currentId={currentId} setCurrentId={setCurrentId} />
    );
}
export default Explore;