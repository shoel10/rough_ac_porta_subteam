import React from 'react';
import './App.css';
import NavBar from './Components/CustomerBooking/NavBar';
import {Container, Row, Col} from "reactstrap";
import MenuContent from './Components/CustomerBooking/MenuContent';
import RequetForm from './Components/CustomerBooking/RequetForm';
export default function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Container className='my-3'>
        <Row>
          <Col md={4}>
          <MenuContent></MenuContent>
          </Col>
          <Col md={8}>
          <RequetForm></RequetForm>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
