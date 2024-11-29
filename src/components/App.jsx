// import { useState } from 'react';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import PetList from "./PetList";
import Footer from "./Footer";
import PetArea from "./PetArea";
import PropTypes from "prop-types";
import '../css/App.css';
import { useParams } from "react-router-dom";
//import { getDatabase, ref, onValue, set } from "firebase/database";
//import { database } from "../firebase"; //your firebase setup

function App() {
  const { spiritPet } = useParams();
  const [pets, setPets] = useState([])
  const [petSelected, setpetSelected] = useState();

  useEffect(() => {
    

    if(!spiritPet) {
      console.error("O wow you do not have a spirit animal");
      return;
    }

    const localStoreageRef = localStorage.getItem(spiritPet);
    if(localStoreageRef) {
      setPets(JSON.parse(localStoreageRef));
    }

    //const petTrackerRef = ref(database, `${spiritPet}/pets`);

    // onValue(petTrackerRef, (snapshot) => {
    //   const data = snapshot.val() || {}; 
    //   console.log("Got the pets from the database", data);
    //   setPets(data);
    // });

    return () => {}
  }, [spiritPet]);

  // Save pets data to localStorage whenever it changes
  useEffect(() => {
    if (spiritPet) {
      localStorage.setItem(spiritPet, JSON.stringify(pets));
    }
  }, [pets, spiritPet]);

  /**
   * Function to update the pets list for the user.
   */
  function updatePets ( petId ) {
    //copy list
    const newPets = {...pets};
    newPets[petId] = petId;
    setPets(newPets);
  }

  /**
   * Function to add new pets to users petList 
   * using a key value pair that will use the pet ID as the key in the 
   * pet list.
   */
  function addToPets( pet ) {
    const newPets = {...pets}
    newPets[pet.petId] = pet;
    setPets(newPets);
  }

    /**
   * Function to delete a pet from the pets list
   * using a key value pair that will use the pet ID as the key in the 
   * pet list.
   */
    function deleteAPet(petId) {
      setPets(newPets => {
        return newPets.filter(pet => pet.id !== petId)
      })      
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
      updatePets ={updatePets}
      addAPet={addToPets}
      deletePets={deleteAPet}
      petDisplayed={petSelected}
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
