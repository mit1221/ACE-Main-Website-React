import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from './Components/Card/Card';
import ContactCard from './Components/ContactCard/ContactCard';
import HLink from './Components/HLink/HLink';
import Services from './Components/Services/Services';
import Checkmark from './Images/checkmark.svg';
import TSJ from './Images/TSJ.svg';
import Conhall from './Images/conhall.svg';

class App extends Component {
  render() {
    return <Grid fluid style={{minHeight: '100vh'}}>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col xs={12} md={2} style={{backgroundColor: '#CCCCCC', padding: '40px 20px'}}>
          <Card icon={Checkmark} altText='checkmark icon' text='Test & Exam Services' link='tes/' newPage/>
          <Card icon={TSJ} altText='TSJ icon' text='Classrooms with the Teaching Station & TSJr' link='teaching_station1.html'/>
          <Card icon={Conhall} altText='con hall icon' text='Con Hall Website' link='conhall/' newPage/>
        </Col>

        <Col xs={12} md={8} style={{padding: '40px 40px 0 40px'}}>
          <h1>ACADEMIC AND CAMPUS EVENTS</h1>
          <HLink
            color="#002A5C"
            fontSize="1.2em"
            link="http://www.utoronto.ca"
            newPage uppercase>University of Toronto, St. George Campus
          </HLink>
          <Services/>
        </Col>

        <Col xs={12} md={2} style={{paddingTop: 40}}>
          <Card text='Report Classroom Problem' link='http://www.ace.utoronto.ca/comments' newPage/>
          <Card text='ACE Academic Calendar 2017-2018' link='http://www.ace.utoronto.ca/website/PDFs/ACE Calendar 2017-2018.pdf' newPage/>
          <ContactCard/>
        </Col>
      </Row>
      <Row>
        <p>Footer here</p>
      </Row>
    </Grid>
  }
}

export default App;
