import React from 'react';
import { render, screen, cleanup, getByText, queryByText, cleanup } from '@testing-library/react';
import LandingPage from '../components/LandingPage';
import { MemoryRouter } from 'react-router-dom';


test('renders LandingPage form', () => {
  render(
  <MemoryRouter initialEntries={['/']}>
    <LandingPage />
  </MemoryRouter>);
  
  // Check if the form elements are rendered
  expect(getByText(/Welcome to the Pet Tracker/i)).toBeInTheDocument();
  // expect(screen.getByRole(<h1>Welcome to the Pet Tracker</h1>)).toBeInTheDocument();
  // expect(getByText('Please Sign into the App.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Log In With GitHub' }));
});