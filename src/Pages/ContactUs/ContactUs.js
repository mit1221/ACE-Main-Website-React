import React from 'react';
import classes from './ContactUs.css';
import ContactCard from '../../Components/ContactCard/ContactCard';
import { Row, Col } from 'react-bootstrap';

const ContactUs = props => (
  <Row className={['body', classes.body].join(' ')}>
    <h1>Contact Us</h1>
    <Col xs={12} md={5} style={{paddingLeft: 0}}>
      <ContactCard wide/>
    </Col>
    <Col xs={12} md={7}>
      <h2>Space Bookings</h2>
    </Col>
  </Row>
);

export default ContactUs;
