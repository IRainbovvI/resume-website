import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HiOutlineMenu } from 'react-icons/hi';
import '../index.css';

export const CardHeader = ({ setNavVisible, navVisible }) => {
  return (
    <header>
      <Container id='sticky-header'>
        <Row>
          <Col xs='10'>
            <div className='vertical-center'>
              <h4>Vladyslav Prokopchuk</h4>
            </div>
          </Col>
          <Col xs='2'>
            <button
              className='vertical-center'
              onClick={() => setNavVisible(!navVisible)}
            >
              <HiOutlineMenu />
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
