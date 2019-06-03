import React from 'react';

// imported components
import Sidebar from './Sidebar';
import Chart from '../charts/Chart';
import { Container, Row, Col } from 'reactstrap';

const MainSection = () => {
  return (
    <Container className='mt-4' fluid>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
