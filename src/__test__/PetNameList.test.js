import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import PetNameList from '../components/PetNameList';

test('renders PetNameList form', () => {
  render(<PetNameList />);
  
});
