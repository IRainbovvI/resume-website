//React
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

//Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

//Components
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { CardHeader } from './components/CardHeader';

//Pages
import { Home } from './pages/Home';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

const App = () => {
  //Colapse Navbar
  const [navVisible, setNavVisible] = useState(false);

  return (
    <Container id='main-container'>
      <Row>
        <Col className='d-none d-md-block navbar-main no-padding' md='3'>
          <Card />
          <Navbar />
        </Col>

        <Col xs='12' className='d-md-none no-padding'>
          <CardHeader setNavVisible={setNavVisible} navVisible={navVisible} />
        </Col>

        {navVisible && (
          <Col xs='12' className='d-md-none no-padding'>
            <Navbar />
          </Col>
        )}

        <Col xs='12' md='9' className='no-padding'>
          <div className='page-container'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/education'>
                <Education />
              </Route>
              <Route path='/experience'>
                <Experience />
              </Route>
              <Route path='/skills'>
                <Skills />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
