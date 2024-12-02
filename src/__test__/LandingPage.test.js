import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

test('renders LandingPage form', () => {
  render(<LandingPage />);
  
});
