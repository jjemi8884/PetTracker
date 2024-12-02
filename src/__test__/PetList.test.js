import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import PetList from '../components/PetList';

test('renders PetList form', () => {
  render(<PetList />);
  
});
