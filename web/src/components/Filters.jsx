/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap';
import '../styles.css';

// eslint-disable-next-line react/prop-types
const Filters = ({ sortType, sortFunction }) => (
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
        checked={sortType === 'lowToHigh'}
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
        checked={sortType === 'highToLow'}
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
