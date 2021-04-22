import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Vtuber = ({ vtuber }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Fragment>
            <button onClick={()=>{history.push('/vtuberList/'+vtuber._id)}}><img src={vtuber.avatar} width="200" height="200"/></button>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{vtuber.name}</div>
        </Fragment>
    );
};

export default Vtuber;