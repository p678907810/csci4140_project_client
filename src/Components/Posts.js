import React,{Fragment} from 'react';
import { useSelector } from 'react-redux';
const Posts = () =>{
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
    <Fragment>
        
    </Fragment>
    )
}
export default Posts;