import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header form', () => {
  render(<Header />);
  
});