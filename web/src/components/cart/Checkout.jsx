/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Row, Col, Form, Button, InputGroup,
} from 'react-bootstrap';
import { useFormik, Formik } from 'formik';

export default function Checkout({ formInitialValues, handleFormClick }) {
  const onSubmitFunc = (values) => {
    handleFormClick(values);
  };

  return (
    <Formik onSubmit={onSubmitFunc} initialValues={formInitialValues}>
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h5>Billing Address:</h5>
              <hr />
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Col lg="4" />
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <br />
            </Col>
            <Col>
              <h5>Payment Details:</h5>
              <hr />
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Name on card</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name on card"
                    name="nameOnCard"
                    value={values.nameOnCard}
                    onChange={handleChange}
                    isInvalid={!!errors.nameOnCard}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nameOnCard}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Credit Card</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Credit Card Number"
                    name="creditCardNumber"
                    value={values.creditCardNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.creditCardNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.creditCardNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Expiration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/DD"
                    name="expiration"
                    value={values.expiration}
                    onChange={handleChange}
                    isInvalid={!!errors.expiration}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.expiration}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    name="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                    isInvalid={!!errors.cvv}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvv}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Col lg="4">
                  <Button type="submit" variant="success">Place Order</Button>
                </Col>
                <Col lg="8" />
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
