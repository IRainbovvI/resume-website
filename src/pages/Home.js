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
                A hard-working individual with knowledge in HTML, JavaScript,
                and CSS, as well as the ability to communicate and work in a
                team effectively seeks to apply for the position of Junior
                Front-end Developer. Hope to show my problem-solving and
                fast-learning skills. I am going to make your company even
                greater with all my knowledge.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
