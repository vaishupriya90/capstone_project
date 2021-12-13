import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles.css';
import SinglePainting from './SinglePainting';

const Paintings = () => {
  const [error, setError] = useState(null);
  const [paintings, setPaintings] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://localhost:5001/api/paintings');
        setPaintings(data);
      } catch (err) {
        setError(err);
      }
      setLoadingState(false);
    };

    fetchData();
  }, []);

  if (loadingState) {
    return (
      <div>Loading</div>
    );
  }

  if (error) {
    return (
      <div>Oops! Could not fetch the list of paintings.</div>
    );
  }

  return (
  // <ul>
  //   {paintings.map(({ id, name }) => (
  //     <li key={id}>{name}</li>
  //   ))}
  // </ul>

    <div className="productContainer">
      {
        paintings.map((painting) => (
          <SinglePainting painting={painting} />
        ))
}
    </div>

  );
};

export default Paintings;
