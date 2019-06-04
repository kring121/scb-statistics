import React from 'react';

// imported components
import Sidebar from './Sidebar';
import Chart from '../charts/Chart';
import { Container, Row, Col } from 'reactstrap';

const MainSection = () => {
  return (
    <Container className='mt-4' fluid>
      <Row>
        <Col lg='4' className='mb-5'>
          <Sidebar />
        </Col>
        <Col lg='8'>
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
