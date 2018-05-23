import React from 'react';
import classes from './AboutUs.css';
import { Row } from 'react-bootstrap';

const AboutUs = props => (
  <Row className={['body', classes.body].join(' ')}>
    <h1>What is ACE?</h1>
    <div className={classes.majorSection}>
      <section>
        <h2>Academic and Campus Events</h2>
        <p>ACE runs the central or 'shared' space at UofT - both academic (classroom) spaces & shared community (non-classroom) areas.</p>
      </section>
    </div>
    <div className={classes.majorSection}>
      <section>
        <h2>Academic Spaces (Classrooms and Lecture Halls)</h2>
        <p>Let's say department "X" has a building with 45 classrooms, but they really only need 35. The remaining 10 classrooms can be designated as 'central' and their management is handed over to ACE. ACE takes over all the maintenance costs for the rooms, and rents out the space to departments across campus. If department "X" finds it sometimes needs more than 35 rooms, they can rent from ACE the 10 ACE rooms - in their building - when they need them. So ACE is "space on demand".</p>
      </section>
      <section>
        <h2>What's the Benefit?</h2>
        <p>The department benefits because it only pays for the maintenance of space that it actually uses. If a department is in a building larger than it requires, it can out-source (to ACE) the maintenance costs of the unused classrooms.</p>
        <p>The University benefits because it gains access (on a rental basis) to more square footage. If another department - department "Y" - sometimes needs 3 rooms more than it has in its building, it can rent out the unused space in department "X"'s building.</p>
        <p>This is the UofT ecosystem: a community of departments that maintain a healthy autonomy while still being able to reap benefits of belonging to a much larger community.</p>
      </section>
      <section>
        <h2>How Does it Work?</h2>
        <p>Departments and groups can rent ACE rooms and spaces through our website. Academic departments are given <a href="room_res.html">booking</a> priority. If you have general University space usage requests, <a href="contact.html">contact</a> our office.</p>
        <p>For these rooms, ACE becomes responsible for booking, room equipment and furnishings, and <a href="tech_support.html">technical support</a> - in short, everything inside the room envelope. But if it's not an ACE (or 'central') room, than ACE won't be able to help you with booking or technology. In that case you'll have to find out who owns and operates the space you want, and contact them.</p>
      </section>
      <section>
        <h2>How does ACE make the University better?</h2>
        <p>ACE makes space usage at the University more efficient. It allows blocks of space on campus to be defined by who uses them - not just by which building they are in.</p>
      </section>
      <section>
        <h2>Classroom Design Standards</h2>
        <p>Because ACE spends so much time handling classrooms for all different sorts of departments we are classroom experts. We specify what's in there and have to live with the consequences. We specify the simplest, most serviceable, and longest lasting equipment, design and furnishings.</p>
        <p>ACE creates and implements <a href="standards.html">standards</a> for classroom design, providing specifications for our own rooms and consultation advice on other builds and renovations. We work closely with manufacturers to select the most usable (and durable) classroom furnishings, and develop <a href="tech_support.html">audio-visual systems</a> in-house in conjunction with major suppliers. This includes working with <a href="accessibility.html">accessibility</a> services in providing the space and furnishings required for the broad spectrum of student physical needs in the classroom.</p>
      </section>
      <section>
        <h2>Test and Exam Services</h2>
        <p>A division of ACE, TES provides exceptional facilities and services for testing and examinations for the wide range of accommodations required by our diverse student body. <a href="http://osm.utoronto.ca/tes/">Test and Exam Services</a> is located in the <a href="exam.html">Exam Center</a>.</p>
      </section>
      <section>
        <h2>The Exam Center</h2>
        <p>The <a href="exam.html">Exam Center</a> is UofT's first building dedicated specifically to writing tests and exams. The large halls (in a historic industrial building, retro-fitted for our needs) have rows of individual tables that are used year around of testing. Having a dedicated testing facility - and not having to always piggy-back on regular academic halls - has been a huge operational asset to the university, and increases the consistent quality of the testing environment for students.</p>
      </section>
    </div>
    <section>
      <h2>Community Spaces (Non-classroom UofT)</h2>
      <p>ACE is not just rooms in buildings. We manage Convocation Hall (a one-classroom building), Test and Exam Services (in the Exam center), the Exam Center, and Front campus field (a shared University resource).</p>
      <p>In addition, ACE's Campus Events team provides leadership, direction, expertise and advice in event production to the University community, with emphasis on high standards for customer service, attention to detail and quality.</p>
      <p>The office also books and monitors commercial <a href="film.html">film</a> productions on campus and manages private <a href="weddinghome.html">photography</a> appointments.</p>
    </section>
  </Row>
);

export default AboutUs;
