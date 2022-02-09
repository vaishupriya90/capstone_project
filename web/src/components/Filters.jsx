/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles.css';

// eslint-disable-next-line react/prop-types
const Filters = ({ sortType, setSortType }) => {
  const handleChange = React.useCallback((event) => {
    setSortType(event.target.value);
  });

  return (
    <>
      <Form.Select
        size="sm"
        style={{ width: '50%' }}
        id="sortType"
        value={sortType}
        onChange={handleChange}
        name="sortType"
      >
        <option value="lowToHigh">Low To High</option>
        <option value="highToLow">High To Low</option>
      </Form.Select>
    </>
  );
};

export default Filters;
