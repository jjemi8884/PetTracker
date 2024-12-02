import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer form', () => {
  render(<Footer />);
  
});
