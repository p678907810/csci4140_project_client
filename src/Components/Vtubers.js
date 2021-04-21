import React,{Fragment} from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Vtuber from './Vtuber/Vtuber'
import { Container,Row,Col } from 'react-bootstrap';

const Vtubers = () =>{
    const vtubers = useSelector((state) => state.vtubers);
    console.log(vtubers);
    return (
    <Fragment>
        <Row>
        {vtubers.map((vtuber) =>(
            <Grid key={vtuber._id}>
                <Col><Vtuber vtuber={vtuber} /></Col>
            </Grid>
        ))}
        </Row>
    </Fragment>
    )
}
export default Vtubers;