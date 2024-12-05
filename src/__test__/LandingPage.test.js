import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


beforeEach(() => {
  render(
  <MemoryRouter initialEntries={['/']}>
    <LandingPage />
  </MemoryRouter>);
});



it('renders LandingPage form with a button and text', () => {
  
  // Check if the form elements are rendered
  expect(screen.getByText(/Welcome to the Pet Tracker/i)).toBeInTheDocument();
 
  expect(screen.getByText(/Please Sign into the App./i)).toBeInTheDocument();
  //expect(screen.getByRole('button', { name: 'Log In With GitHub' }));
});