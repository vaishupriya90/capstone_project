// import React from 'react';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { render, screen } from '@testing-library/react';
// import Painting from './Painting';

// test('renders name of a single painting', async () => {
//   const mockApi = new MockAdapter(axios);
//   mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/painting`).reply(200, { name: 'The Lonely Boat' });
//   render(<Painting />);
//   expect(await screen.findByText('The Lonely Boat')).toBeInTheDocument();
// });

// test('renders error if fetching the name of the painting fails', async () => {
//   const mockApi = new MockAdapter(axios);
//   mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/painting`).reply(500);
//   render(<Painting />);
//   expect(await screen.findByText('Oops! Could not fetch the painting.')).toBeInTheDocument();
// });
