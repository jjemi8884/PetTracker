import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

// Mock the Firebase base object
const base = {
  syncState: jest.fn(),
  removeBinding: jest.fn(),
};

test('renders App component without crashing', () => {
  const match = {
    params: {
      userId: '11ljaslfuoiasduasoifasofoasfahsdfhasfhypashf',
    },
  };
})