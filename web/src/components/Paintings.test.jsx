// import React from 'react';
// import axios from 'axios';
// import { Provider } from 'react-redux';
// import MockAdapter from 'axios-mock-adapter';
// import { render, screen } from '@testing-library/react';
// import { createStore } from 'redux';
// import Paintings from './Paintings';
// import rootReducer from '../redux/rootReducer';

// const store = createStore(rootReducer);

// const testData = [
//   {
//     id: 1,
//     name: 'The Lonely Boat',
//   },
//   {
//     id: 2,
//     name: 'Peacock',
//   },
//   {
//     id: 3,
//     name: 'Silhoutte house',
//   },
//   {
//     id: 4,
//     name: 'Black bird perched on tree',
//   }];

// test('renders a list of paintings', async () => {
//   const mockApi = new MockAdapter(axios);
//   mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/paintings`).reply(200, testData);
//   render(<Provider store={store}><Paintings /></Provider>);
//   expect(await screen.findByText(testData[0].name)).toBeInTheDocument();
//   expect(await screen.getAllByRole('img')).toHaveLength(testData.length);
// });

// // test('renders error if fetching the name of the painting fails', async () => {
// //   const mockApi = new MockAdapter(axios);
// //   mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/paintings`).reply(500);
// //   render(<Provider store={store}><Paintings /></Provider>);
// //   expect(await screen.findByText('Oops! Could not fetch the list of paintings.')).toBeInTheDocument();
// // });
