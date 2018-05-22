import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { Grid, Row } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return <Grid fluid>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Sidebar></Sidebar>
        <p>Put links here</p>
      </Row>
      <Row>
        <p>Footer here</p>
      </Row>
    </Grid>
  }
}

export default App;
