import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';

export const Education = () => {
  return (
    <div>
      <ul className='edu-schools no-padding'>
        <li>
          <article className='edu-school-container'>
            <h4>Bachelor of Engineering | Lublin University of Technology</h4>
            <p>01.10.2020 – 31.12.2023</p>
          </article>
        </li>
        <li>
          <article className='edu-school-container'>
            <h4>IT Technician | Zespół Szkół Zawodowych nr 1 w Dęblinie</h4>
            <p>01.09.2016 – 01.06.2020</p>
          </article>
        </li>
      </ul>
      <Container>
        <Row style={{ paddingBottom: '3%' }}>
          <Col xs='12' md='6'>
            <div className='edu-school-container'>
              <h4>Certificates</h4>
              <div id='parallelogram' style={{ width: '70%' }}></div>
              <ul>
                <li>
                  <b>Certificate E.12</b> - Installation and operation of
                  personal computers and peripheral devices.
                </li>
                <li>
                  <b>Certificate E.13</b> - Designing local computer networks
                  and network administration.
                </li>
                <li>
                  <b>Certificate E.14</b> - Creation of Internet applications
                  and database administration.
                </li>
                <li>
                  <b>Programming Foundations with JavaScript, HTML and CSS</b>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='edu-school-container' style={{ height: '100%' }}>
              <h4>Coursework</h4>
              <div id='parallelogram' style={{ width: '70%' }}></div>
              <ul>
                <li>Programming Foundations with JavaScript, HTML and CSS</li>
                <li>Learn JavaScript</li>
                <li>Version Control with Git</li>
                <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
