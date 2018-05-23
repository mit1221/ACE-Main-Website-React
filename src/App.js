import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import { Grid, Row } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import AboutUs from './Pages/AboutUs/AboutUs';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid fluid>
          <Row>
            <Header/>
          </Row>
          <Route path='/' exact component={Homepage}/>
          <Route path='/about' exact component={AboutUs}/>
          <Route path='/contact' exact component={AboutUs}/>
          <Row>
            <Footer/>
          </Row>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
