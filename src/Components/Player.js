import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Row,Col } from 'react-bootstrap';

const styles = theme => ({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
    },
  });
class Player extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            videoId: '6LAKyyKu5Fo',
            start_time: 0,
        }
    }
    clickHandler(id,time){
        this.setState({
            videoId: id,
            start_time: time,
        })
    }
    render(){
        const { classes } = this.props;
        let opts = {
            height: '390',
            width: '640',
            playerVars:{
                autoplay:1,
                start:this.state.start_time,
            },
        };
        return (
        <Row>
        <Col><YouTube videoId={this.state.videoId} opts={opts} onReady={this._onReady} /></Col>
        <Col>
        <List className={classes.root}>
            <ListItem button onClick={this.clickHandler.bind(this,'6LAKyyKu5Fo',36*60+17)}>
                <ListItemText primary="Life / YUI" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
            </ListItem>
            <ListItem button onClick={this.clickHandler.bind(this,'6LAKyyKu5Fo',29*60+33)}>
                <ListItemText primary="瞬き / back number" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
            </ListItem>
            <ListItem button onClick={this.clickHandler.bind(this,'6LAKyyKu5Fo',49*60+53)}>
                <ListItemText primary="カタオモイ / Aimer" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
            </ListItem>
        </List>
        </Col>
        </Row>
        );
    }
    _onReady(event){
        event.target.pauseVideo();
    }
}
Player.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Player);