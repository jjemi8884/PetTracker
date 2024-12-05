import React from 'react';
import { fireEvent, render, screen, toBeInTheDocument } from '@testing-library/react';
import PetArea from '../components/PetArea';
import {createPets} from '../fakePets'


describe('Testing of PetArea', () => {
    const petsMock = {12345 : {
      "id" : 12345,
      "name": 'myMockPet',
      "dob" : '01-01-2020',
      "gender" : 'male'
      }};

    const currentPetInfoMock = {
      "id" : 12345,
      "name": 'myMockPet',
      "dob" : '01-01-2020',
      "gender" : 'male'
      };

    const updatePetsMock = jest.fn();
    const deleteAPetMock = jest.fn();
    const fakePetsMock = jest.fn();
    const currentPetMock = jest.fn();

  // beforeEach(() => {
  //   render(<PetArea 
  //   pets ={petsMock}
  //   currentPetInfo={currentPetInfoMock}
  //   updatePets={updatePetsMock}
  //   deleteAPet={deleteAPetMock}
  //   fakePets={fakePetsMock}
  //   currentPet={currentPetMock}/>);
    
  // });

  //render the pet info

  it('rendered the text and buttons on the screen', () => {
    render(<PetArea 
      pets ={petsMock}
      currentPetInfo={currentPetInfoMock}
      updatePets={updatePetsMock}
      deleteAPet={deleteAPetMock}
      fakePets={fakePetsMock}
      currentPet={currentPetMock}/>);
   // expect(screen.getByText(/Current Selected Pet/i).toBeInTheDocument());
  //  fireEvent.click(screen.getByText(/Add companion/i));
  //  expect(addAPet).toHaveBeenCalled();
  //  expect(toggleShowForm).toHaveBeenCalled();
  //  expect(currentPet).toHaveBeenCalled();
  //  fireEvent.click(screen.getByText(/fakePetsGen/i));
  //  expect(fakePetsGen).toHaveBeenCalled();
  });

});


