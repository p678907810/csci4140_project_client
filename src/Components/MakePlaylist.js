import React,{Fragment} from 'react';
import {Button,Form,FormControl,Container,Row,Col} from 'react-bootstrap';
const MakePlaylist = () =>{
    return (
        <Container>
        <Form>
            <Form.Group controlId="formBasicURL">
                <Form.Label>Video Url</Form.Label>
                <Form.Control type="text" placeholder="https://www.youtube.com/watch?v=vtuber" />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
                <Form.Label>Upload date</Form.Label>
                <Form.Control type="text" placeholder="YYYY/MM/DD" />
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Video Title</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicSongName">
                <Form.Label>Song Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Row>
            <Col>
            <Form.Group controlId="formBasicStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="text" placeholder="hh:mm:ss" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formBasicEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="text" placeholder="hh:mm:ss" />
            </Form.Group>
            </Col>
            </Row>
            <Button variant="info" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}
export default MakePlaylist;