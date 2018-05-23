import React, { Component } from 'react';
import classes from './App.css';

import Header from './Components/Header/Header';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from './Components/Card/Card';
import ContactCard from './Components/ContactCard/ContactCard';
import HLink from './Components/HLink/HLink';
import Table from './Components/Table/Table';
import TableRow from './Components/Table/Row/Row';
import Footer from './Components/Footer/Footer';
import Checkmark from './Images/checkmark.svg';
import TSJ from './Images/TSJ.svg';
import TS from './Images/TS.svg';
import Conhall from './Images/conhall.svg';

class App extends Component {
  render() {
    return <Grid fluid>
      <Row>
        <Header/>
      </Row>
      <Row style={{minHeight: '100vh'}}>
        <Col xs={12} sm={3} lg={2} style={{padding: '40px 20px'}}>
          <Card icon={Checkmark} altText='checkmark icon' text='Test & Exam Services' link='http://www.ace.utoronto.ca/tes/' newPage/>
          <Card icon={[TSJ, TS]} altText={['TSJ icon', 'teaching station icon']} text={['Teaching Station Jr.', 'Teaching Station']} link='teaching_station1.html'/>
          <Card icon={Conhall} altText='con hall icon' text='Con Hall Website' link='http://ace.utoronto.ca/conhall/' newPage/>
        </Col>

        <Col xs={12} sm={6} lg={8} style={{padding: '40px 40px 0 40px'}}>
          <h1>Academic + Campus Events</h1>
          <HLink
            color='#002A5C'
            fontSize='1.1em'
            link='http://www.utoronto.ca'
            newPage uppercase>University of Toronto, Downtown Campus
          </HLink>
          <Table>
            <TableRow width='30%' data={['Room Reservation', 'To reserve classroom space or look up existing reservations']} link='room_res.html'/>
            <TableRow data={['Room Description', 'Classroom descriptions and photographs']} link='../class_spec'/>
            <TableRow data={['Tech Support', 'Classroom and A/V technology support']} link='tech_support.html'/>
            <TableRow data={['Report Classroom Problem', 'Online form for classroom and A/V equipment problems']} link='http://www.ace.utoronto.ca/comments'/>
            <TableRow data={['Weddings', 'To apply for wedding photography on campus']} link='weddinghome.html'/>
            <TableRow data={['Filming', 'To apply for commercial filming on campus']} link='film.html'/>
            <TableRow data={['Accessibility', 'Building and meeting room accessibility']} link='accessibility.html'/>
          </Table>
        </Col>

        <Col xs={12} sm={3} lg={2} style={{padding: '40px 20px'}}>
          <Card text='Report Classroom Problem' link='http://www.ace.utoronto.ca/comments' newPage/>
          <Card text='ACE Academic Calendar 2017-2018' link='http://www.ace.utoronto.ca/website/PDFs/ACE Calendar 2017-2018.pdf' newPage/>
          <ContactCard/>
        </Col>
      </Row>
      <Row className={classes.footer}>
        <Footer/>
      </Row>
    </Grid>
  }
}

export default App;
