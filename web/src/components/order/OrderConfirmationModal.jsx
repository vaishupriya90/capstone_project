/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FcApproval } from 'react-icons/fc';

const OrderConfirmationModal = (props) => (
  <div className="modal">
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your order has been received
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FcApproval />
        <h4>Thank you for your purchase!</h4>
        <h5>
          Your order number is:
          {props.response}
        </h5>
        <h6>
          you will receive an email confirmation with details of the order
        </h6>
      </Modal.Body>
      <Link to="/paintings"><Button onClick={props.onHide}>Continue Shopping!</Button></Link>
      <Modal.Footer />
    </Modal>
  </div>
);

export default OrderConfirmationModal;
