import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const Vtuber = ({ vtuber }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <button><img src={vtuber.avatar} width="200" height="200"/></button>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{vtuber.name}</div>
        </Fragment>
    );
};

export default Vtuber;