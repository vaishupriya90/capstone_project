import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideCart from './cart/SideCart';
import Paintings from './painting/Paintings';

const ProductLayout = () => (
  <>
    <Row>
      <Col lg="9">
        <Row>
          <Col>
            <Paintings />
          </Col>
        </Row>
      </Col>
      <Col lg="3">
        <Row>
          <Col>
            <SideCart />
          </Col>
        </Row>
      </Col>
    </Row>
  </>
);
export default ProductLayout;
