import React,{Fragment} from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import { Container,Row,Col } from 'react-bootstrap';

const Posts = () =>{
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
    <Fragment>
        <Row>
        {posts.map((post) =>(
            <Grid key={post._id}>
                <Col><Post post={post} /></Col>
            </Grid>
        ))}
        </Row>
    </Fragment>
    )
}
export default Posts;