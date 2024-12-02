import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import PetForm from '../components/PetForm';

test('renders PetForm form', () => {
  render(<PetForm />);
  
});
