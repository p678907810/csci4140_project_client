import React, { Component, Fragment,useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import './App.css';
import { useDispatch } from 'react-redux';
import { getVtubers } from './actions/vtubers';
import { getSongs } from './actions/songs';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Vtubers from './Components/Vtubers';
import Explore from './Components/Explore';
import VtuberList from './Components/VtuberList'
import About from './Components/About';
import Contact from './Components/Contact'
import NavBar from './Components/Navbar';
// import MakePlaylist from './Components/MakePlaylist'
import AddSong from './Components/AddSongForm'
import Player from './Components/Player'
import AddVtuber from './Components/AddVtuberForm'
import VirtualizedList from './Components/listRow'

import { Container, Row, Col } from 'react-bootstrap';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVtubers())
  }, [currentId, dispatch]);
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" render={() => (
          <Fragment>
            <Container>
              <h1>Vtubers</h1>
              <Vtubers setCurrentId={setCurrentId} />

            </Container>
          </Fragment>
        )} />

        <Switch>
          <Route path="/vtuberList/:vtuber" component={VtuberList} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/addVtuber" component={AddVtuber} />
          <Route exact path="/addSong" component={AddSong} />
        </Switch>
      </Fragment>
    </Router>
  );

}
export default App;