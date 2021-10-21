import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';
import img from '../photo.jpg';

export const Home = () => {
  return (
    <section>
      <Container className='no-padding'>
        <div className='inner-home-container'>
          <Row>
            <Col xs='12' md='3'>
              <article className='photo-container'>
                <img src={img} alt='Nope' className='photo' />
              </article>
            </Col>
            <Col xs='12' md='8'>
              <h1 className='home-subtitle home-title'>Vladyslav Prokopchuk</h1>
              <div id='parallelogram'></div>
              <h5 className='home-subtitle'>Junior Front-End Developer</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='home-text'>
                A hard-working programmer with knowledge in HTML, JavaScript,
                and CSS applies for the position of Junior Front-end Developer.
                My problem-solving and fast-learning skills compensate for my
                lack of experience. I will make a significant contribution to
                the project. Moreover, I can work in a team and under pressure.
                I always follow deadlines and know how to work with reports.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
