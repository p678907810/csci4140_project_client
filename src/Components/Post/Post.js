import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const Post = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <button><img src={post.avatar} width="200" height="200"/></button>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{post.name}</div>
        </Fragment>
    );
};

export default Post;