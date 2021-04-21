import React, { Component, Fragment,useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import './App.css';
import { useDispatch } from 'react-redux';
import { getVtubers } from './actions/vtubers';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
// import Posts from './Components/Posts';
import Vtubers from './Components/Vtubers';
import About from './Components/About';
import Contact from './Components/Contact'
import NavBar from './Components/Navbar';
import MakePlaylist from './Components/MakePlaylist'
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
              <Welcome name="Vtuber Music" />
              <Player />
              <h1>Vtubers</h1>
              <Vtubers setCurrentId={setCurrentId} />
            </Container>
          </Fragment>
        )} />

        <Switch>
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/addVtuber" component={AddVtuber} />
          <Route exact path="/makeplaylist" component={MakePlaylist} />
        </Switch>
      </Fragment>
    </Router>
  );

}
export default App;