import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function VirtualizedList() {
  const classes = useStyles();
  function clickHandler(){
      console.log("See if there is a message");
  }
  return (
    <List className={classes.root}>
      <ListItem button onClick={clickHandler}>
        <ListItemText primary="Life / YUI" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="瞬き / back number" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="カタオモイ / Aimer" secondary="【歌枠】深夜にSing a songぺこ！【ホロライブ/兎田ぺこら】 #2020/09/11" />
      </ListItem>
    </List>
  );
}