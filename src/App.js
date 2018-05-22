import React, {Component} from 'react';
import Header from './Components/Header/Header';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return <Grid fluid="fluid">
      <Row>
        <Header/>
      </Row>
      <Row>
        <p>Each page</p>
        <p>Put links here</p>
      </Row>
      <Row>
        <p>Footer here</p>
      </Row>
    </Grid>
  }
}

export default App;
