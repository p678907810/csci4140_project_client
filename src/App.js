import React, {Component,Fragment,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Posts from './Components/Posts';
import About from './Components/About';
import Contact from './Components/Contact'
import NavBar from './Components/Navbar';
import MakePlaylist from './Components/MakePlaylist' 
import Player from './Components/Player'
import VirtualizedList from './Components/listRow'

import { Container,Row,Col } from 'react-bootstrap';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch]);
    return (
      <Router>
        <Fragment>
            <NavBar />
            <Route exact path ="/" render={()=>(
              <Fragment>
                <Container>
                  <Welcome name="Vtuber Music" />
                  <Player />
                </Container>
              </Fragment>
            )} />
            
            <Switch>
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/makeplaylist" component={MakePlaylist} />
            </Switch>
            <Posts />
       </Fragment>
      </Router>
    );
  
  }
export default App;