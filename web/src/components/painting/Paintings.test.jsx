import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { PaintingsComponent } from './Paintings';

const testPaintings = [
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

const addToCart = jest.fn();
const removeItem = jest.fn();

const renderTestObject = (customProps = {}) => {
  const props = {
    paintings: testPaintings,
    fetchPaintings: jest.fn(),
    paintingsLoaded: true,
    addItemToCart: addToCart,
    error: false,
    removeItemFromCart: removeItem,
    cartItems: [],
    sortType: '',
    sortFunction: jest.fn(),
    searchValue: '',
    ...customProps,
  };

  render(<PaintingsComponent {...props} />);
};

test('renders a list of paintings', async () => {
  renderTestObject();
  expect(await screen.findByText(testPaintings[0].name)).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(testPaintings.length);
});

test('renders error if fetching the name of the painting fails', async () => {
  renderTestObject({ error: true });
  expect(await screen.findByText('Oops! Could not fetch the list of paintings!')).toBeInTheDocument();
});

test('add to cart', async () => {
  renderTestObject();
  const button = (await screen.findAllByText('Add to cart'));
  expect(button[0]).toBeInTheDocument();
  button[0].click();
  expect(addToCart).toHaveBeenCalled();
});

test('remove from cart', async () => {
  renderTestObject({
    cartItems: [
      {
        painting: testPaintings[0],
        quantity: 1,
      },
    ],
  });

  const removeButton = (await screen.findByText('Remove'));
  expect(removeButton).toBeInTheDocument();
  removeButton.click();
  expect(removeItem).toHaveBeenCalled();
});
