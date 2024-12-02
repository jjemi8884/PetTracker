import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import Pet from '../components/Pet';

test('renders Footer form', () => {
  render(<Pet />);
  
});
