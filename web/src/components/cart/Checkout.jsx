/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function Checkout({ formInitialValues, handleFormClick }) {
  const schema = yup.object().shape({
    firstName: yup.string().required('Please enter your First Name'),
    lastName: yup.string().required('Please enter your Last Name'),
    address: yup.string().required('Please enter your Address'),
    city: yup.string().required('Please enter the City'),
    state: yup.string().required('Please enter the State'),
    zip: yup.string()
      .required('Please enter 5 digit Zip code')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(5, 'Must be exactly 5 digits')
      .max(5, 'Must be exactly 5 digits'),
    nameOnCard: yup.string().required('Please enter card holder full name.'),
    creditCardNumber: yup.string()
      .required('Please enter 16 digit credit card number')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(16, 'Must be exactly 16 digits')
      .max(16, 'Must be exactly 16 digits'),
    expiration: yup.string().required('Please enter card expiration in MM/YY format'),
    cvv: yup.string()
      .required('Please enter CVV')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(3, 'Must be exactly 3 digits')
      .max(3, 'Must be exactly 3 digits'),
  });

  const onSubmitFunc = (values) => {
    handleFormClick(values);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmitFunc}
      initialValues={formInitialValues}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <div className="checkout-border">
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
                      isInvalid={errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
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
                      isInvalid={errors.address}
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
                      isInvalid={errors.city}
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
                      isInvalid={errors.state}
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
                      isInvalid={errors.zip}
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
                <Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik05">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name on card"
                      name="nameOnCard"
                      value={values.nameOnCard}
                      onChange={handleChange}
                      isInvalid={!!errors.nameOnCard}
                      size={25}
                      maxLength={25}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nameOnCard}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik05">
                    <Form.Label>Credit Card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Credit Card Number"
                      name="creditCardNumber"
                      value={values.creditCardNumber}
                      onChange={handleChange}
                      maxLength={16}
                      isInvalid={errors.creditCardNumber}
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
                      maxLength={3}
                      isInvalid={errors.cvv}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <br />
                <br />
                <Row>
                  <Col lg="10" className="d-grid gap-2"><Button type="submit" variant="dark" size="lg">Place your Order!</Button></Col>
                  <Col lg="2" />
                </Row>
              </Col>
            </Row>

          </Form>
        </div>
      )}
    </Formik>
  );
}
