import PropTypes from 'prop-types';

const paintingPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  availableQuantity: PropTypes.number,
  image: PropTypes.string,
});

export default paintingPropType;
