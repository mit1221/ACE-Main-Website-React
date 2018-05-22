import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import { Grid, Row } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import Card from './Components/Card/Card';
import Checkmark from './Images/checkmark.svg';
import TSJ from './Images/TSJ.svg';
import Conhall from './Images/conhall.svg';

class App extends Component {
  render() {
    return <Grid fluid>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Sidebar>
          <Card icon={Checkmark} altText='checkmark icon' text='Test & Exam Services'/>
          <Card icon={TSJ} altText='TSJ icon' text='Classrooms with the Teaching Station & TSJr'/>
          <Card icon={Conhall} altText='con hall icon' text='Con Hall Website'/>
        </Sidebar>
        <p>Put links here</p>
      </Row>
      <Row>
        <p>Footer here</p>
      </Row>
    </Grid>
  }
}

export default App;
