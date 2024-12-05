import React from 'react';
import { render} from '@testing-library/react';
import PetList from '../components/PetList';
import '@testing-library/jest-dom';

describe('test for the petList page', () =>{
  const petsMock = {
    12345 : {
    "id" : 12345,
    "name": 'myMockPet',
    "dob" : '01-01-2020',
    "gender" : 'male'
    },
    54321 : {
      "id" : 54321,
    "name": 'myMockPet2',
    "dob" : '01-01-2022',
    "gender" : 'female'
    }};

  const currentPetInfoMock = {
    "id" : 12345,
    "name": 'myMockPet',
    "dob" : '01-01-2020',
    "gender" : 'male'
    };

  const currentPetMock = jest.fn();

  it('render and ensure the corrent name is displayed in the currnet pet info',() => {
    render(<PetList 
      currentPet={currentPetMock}
      currentPetInfo={currentPetInfoMock}
      pets = {petsMock} 
      />);
  });
})
