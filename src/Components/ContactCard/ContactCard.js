import React from 'react';
import classes from './ContactCard.css';
import locationIcon from '../../Images/location.svg';
import clockIcon from '../../Images/clock.svg';
import HLink from '../HLink/HLink';
import { Row, Col } from 'react-bootstrap';

const contactCard = props => (<div className={classes.contactInfoCard} style={{margin: props.wide ? 0 : '0 auto', marginTop: 15}}>
    <p className={classes.subtitle}><img src={locationIcon} alt="location icon" />Location</p>
    {props.wide ? <p>Academic and Campus Events <br></br> University of Toronto, Downtown Campus</p> : null}
    <p>McMurrich Building<br></br><strong>4th floor</strong></p>
    <HLink
      color="#333"
      bgColor="#CCCCCC"
      link="http://map.utoronto.ca/building/004"
      newPage>12 Queen's Park Crescent West, Toronto, ON M5S 1S8
    </HLink>

    <p className={classes.subtitle}><img src={clockIcon} alt="clock icon" />Hours</p>
    <Row>
      <Col xs={props.wide ? 6 : 12} style={{marginBottom: props.wide ? 0 : 10}}>
        <p><strong>September - June</strong><br></br>Monday - Friday<br></br>9:00 am - 5:00 pm</p>
      </Col>
      <Col xs={props.wide ? 6 : 12}>
        <p><strong>July - August</strong><br></br>Monday - Friday<br></br>9:00 am - 4:30 pm</p>
      </Col>
    </Row>

    <p className={classes.subtitle}><img src={clockIcon} alt="clock icon" />Phone</p>
  </div>);

export default contactCard
