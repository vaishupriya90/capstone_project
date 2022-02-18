/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FcOk } from 'react-icons/fc';

const OrderConfirmationModal = (props) => {
  const navigate = useNavigate();
  return (

    <div className="modal">
      <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton onClick={() => navigate('/orderHistory')}>
          <Modal.Title style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            Your order has been received
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcOk
            size={100}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <h4>Thank you for your purchase!</h4>
          <h5>
            Your order number is:
            {props.response}
          </h5>
          <h6>
            you will receive an email confirmation with details of the order
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <div d-flex>
            <Link to="/paintings"><Button variant="dark" onClick={props.onHide}>Continue Shopping!</Button></Link>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderConfirmationModal;
