import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import NotValidUser from '../components/NotValidUser';

test('renders NotValidUser form', () => {
  render(<NotValidUser />);
  
});