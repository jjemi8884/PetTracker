import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import PetArea from '../components/PetArea';

test('renders PetArea form', () => {
  render(<PetArea />);
  
});
