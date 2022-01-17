import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line import/no-named-as-default
import Paintings from './Paintings';

import rootReducer from '../redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const testData = [
  {
    id: 1,
    name: 'The Lonely Boat',
    description: 'Some Description',
    price: 200.0,
    availableQuantity: 10,
    image: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Peacock',
    description: 'Some Description',
    price: 99.0,
    availableQuantity: 7,
    image: 'https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs=',
  },
  {
    id: 3,
    name: 'Silhouette house',
    description: 'Some Description',
    price: 120.0,
    availableQuantity: 15,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];

test('renders a list of paintings', async () => {
  const mockApi = new MockAdapter(axios);
  mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/paintings`).reply(200, testData);
  render(<Provider store={store}><Paintings /></Provider>);
  expect(await screen.findByText(testData[0].name)).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(testData.length);
});

test('renders error if fetching the name of the painting fails', async () => {
  const mockApi = new MockAdapter(axios);
  mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/paintings`).reply(500);
  render(<Provider store={store}><Paintings /></Provider>);
  expect(await screen.findByText('Oops! Could not fetch the list of paintings!')).toBeInTheDocument();
});
