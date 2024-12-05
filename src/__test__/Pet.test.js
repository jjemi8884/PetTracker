import React from 'react';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import Pet from '../components/Pet';

describe('Pet component', () => {
  const currentPetInfoMock = {
    "id" : 12345,
    "name": 'myMockPet',
    "dob" : '01-01-2020',
    "gender" : 'male'
    };

  it('make sure the info is rendered right', () =>{
    render(<Pet currentPetInfo={currentPetInfoMock} />);
    expect(screen.getByText(/name: myMockPet/i));
    expect(screen.getByText(/Date Of Birth: 01 01 2020/i));
    expect(screen.getByText(/Gender: male/i));
    expect(screen.getByText(/Age: 4/i));
  })
})
