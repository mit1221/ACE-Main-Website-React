import React from 'react';
import classes from './ContactCard.css';
import locationIcon from '../../Images/location.svg';
import clockIcon from '../../Images/clock.svg';
import HLink from '../HLink/HLink';

const contactCard = props => (<div className={classes.contactInfoCard}>
  <p className={classes.subtitle}><img src={locationIcon} alt="location icon" />Location</p>
  <HLink
    color="#333"
    bgColor="#CCCCCC"
    link="http://map.utoronto.ca/building/004"
    newPage>12 Queen's Park Crescent West, Toronto, ON M5S 1S8
  </HLink>

  <p className={classes.subtitle}><img src={clockIcon} alt="clock icon" />Hours</p>
  <p><strong>month1 - month2</strong><br></br>Monday - Friday<br></br>9:00 am - 5:00 pm</p>
  <p><strong>month3 - month4</strong><br></br>Monday - Friday<br></br>9:00 am - 4:30 pm</p>
</div>
);

export default contactCard
