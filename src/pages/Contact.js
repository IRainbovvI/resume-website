import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineMail } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { BsFillTelephoneFill, BsGithub, BsInstagram } from 'react-icons/bs';
import '../index.css';

export const Contact = () => {
  return (
    <div>
      <div className='contact-container'>
        <h3>You Can Contact Me Through:</h3>
        <div className='contact-inner-container'>
          <Container>
            <Row>
              <Col xs='4' md='3'>
                <a href='mailto:vladarius23@gmail.com'>
                  <div className='single-item-container'>
                    <AiOutlineMail />
                  </div>
                </a>
              </Col>
              <Col xs='4' md='3'>
                <a href='tel:+48510300278'>
                  <div className='single-item-container'>
                    <BsFillTelephoneFill />
                  </div>
                </a>
              </Col>
              <Col xs='4' md='3'>
                <a
                  href='https://github.com/IRainbovvI'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='single-item-container'>
                    <BsGithub />
                  </div>
                </a>
              </Col>
              <Col xs='4' md='3'>
                <a
                  href='https://www.facebook.com/vladyslav.prokopchuk.568'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='single-item-container'>
                    <GrFacebook />
                  </div>
                </a>
              </Col>
              <Col xs='4' md='3'>
                <a
                  href='https://www.instagram.com/i.rainbovv.i/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='single-item-container'>
                    <BsInstagram />
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
