import React from 'react';
import { data } from '../data';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';
import { Skill } from '../components/Skill';

export const Skills = () => {
  const langArr = data.filter((item) => item.type === 'language');
  const hardSkills = data.filter((item) => item.type === 'hard-skill');

  return (
    <div>
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <div className='skill-container'>
              <h4>Languages</h4>

              <ul className='skill-list'>
                {langArr.map((item) => {
                  return <Skill key={item.id} item={item} />;
                })}
              </ul>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='skill-container'>
              <h4>Skills</h4>

              <ul className='skill-list'>
                {hardSkills.map((item) => {
                  return <Skill key={item.id} item={item} />;
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
