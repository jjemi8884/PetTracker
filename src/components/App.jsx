// import { useState } from 'react';
import React, {useState} from "react";
import Header from "./Header";
import PetList from "./PetList";
import Footer from "./Footer";
import PetArea from "./PetArea";
import PropTypes from "prop-types";
import '../css/App.css';

function App() {
  const [pets, setPets] = useState([])
  const [petSelected, setpetSelected] = useState();

  /**
   * Function to update the pets list for the user.
   */
  function updatePet ( petId, updatedPet) {
    //copy list
    const newPets = {...pets};
    newPets[petId] = updatedPet;
    setPets(newPets);
  }

  /**
   * Function to add new pets to users petList
   */
  function addPet( petId, newPet) {
    const newPets = {...pets}
    newPets[petId] = newPet;
    setPets(newPets);
  }

  /**
   * This function will identify the pet that is selected in the pet list 
   * and then will pass that info to the petdispaly to show in the main pet area.
   */
  function currentPet (petId) {
    setpetSelected(pets[petId])
  }



  return (
    <>
    <Header />
    <main>
    <PetList 
    currentPet={currentPet}
    pets={pets}
    />
    <PetArea 
      updatePet ={updatePet}
      addPet={addPet}
      petSelected={petSelected}
    />
    </main> 
    <Footer />
    </>
  )
}

App.propTypes ={
  currentPet : PropTypes.object,
  pets: PropTypes.arrayOf(PropTypes.object),
  updatePet: PropTypes.func,
  addPet: PropTypes.func,
  petSelected: PropTypes.object
}

export default App;
