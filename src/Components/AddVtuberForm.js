import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import getYoutubeChannelId from 'get-youtube-channel-id'
import VtuberForm from './Form/VtuberForm.js'
const youtubeApiKey = 'AIzaSyCciLzhshIk8E8QFq4Jbb8qtQmIMdSdRcQ';
const AddVtuber = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    return (
        <VtuberForm currentId={currentId} setCurrentId={setCurrentId}  />
    );
};

export default AddVtuber;