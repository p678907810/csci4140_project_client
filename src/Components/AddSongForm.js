import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SongForm from './Form/SongForm.js'
const AddSong = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    return (
        <SongForm currentId={currentId} setCurrentId={setCurrentId}  />
    );
};

export default AddSong;