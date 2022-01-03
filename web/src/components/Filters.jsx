/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap';
import '../styles.css';

// eslint-disable-next-line react/prop-types
const Filters = ({ sort, sortFunction }) => (
  <div className="filters">

    <span className="title">Sort by price :</span>
    <span>
      <Form.Check
        inline
        label="Low to High"
        name="group1"
        type="radio"
        id="inline-1"
        onChange={() => sortFunction('lowToHigh')}
        checked={sort === 'lowToHigh'}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="High to Low"
        name="group1"
        type="radio"
        id="inline-2"
        onChange={() => sortFunction('highToLow')}
        checked={sort === 'highToLow'}
      />
    </span>

    {/* <Button
      variant="light"
      // onClick={() => productDispatch({
      //   type: 'CLEAR_FILTERS',
      // })}
    >
      Clear Filters
    </Button> */}
  </div>
);

export default Filters;
