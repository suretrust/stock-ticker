import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./api/secret', () => {
  return {
    POLYGON_API_KEY: 'test',
  };
})

it('renders learn react link', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Search for stock ticker/i);

  expect(inputElement).toBeTruthy();
});
