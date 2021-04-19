import React,{Fragment} from 'react';
import {Button,Form,FormControl,Container,Row,Col} from 'react-bootstrap';
import getYoutubeChannelId from 'get-youtube-channel-id'
const youtubeApiKey = 'AIzaSyCciLzhshIk8E8QFq4Jbb8qtQmIMdSdRcQ';
class AddVtuber extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pic:{},
            channel_id: "" 
        }
    }
    /*
    changeHandler = (event) =>{
        var result = false;
        (async function(){
            console.log(event.target.value);
            result = getYoutubeChannelId(event.target.value);
            console.log(result);
        })();
        
        this.setState({channel_id: event.target.value});
    }*/
    componentDidMount(){
        fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCoSrY_IQQVpmIRZ9Xf-y93g&key=AIzaSyCciLzhshIk8E8QFq4Jbb8qtQmIMdSdRcQ')
        .then((response) => {
            if(response.ok){
                return response.text();
            }
            throw new Error("Error Message");
        })
        .then((data) => {
            console.log(JSON.parse(data).items[0]['snippet']['thumbnails']['high']['url']);
            this.setState({ pic: JSON.parse(data).items[0]['snippet']['thumbnails']['high']['url'] });
        })
    }
    render(){
    return (
        <Container>
        <Form>
            <Form.Group controlId="formBasicVtuberName">
                <Form.Label>Vtuber Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicVtuberId">
                <Form.Label>Vtuber Id</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicChannelUrl">
                <Form.Label>VTuber Channel Link</Form.Label>
                <Form.Control type="text" placeholder="e.g. https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g"/>
            </Form.Group>
            <img src={this.state.pic} width='300' height='300'/><br />
            <Button variant="info" type="submit">
                Add
            </Button>
        </Form>
        </Container>
    )
    }
}
export default AddVtuber;