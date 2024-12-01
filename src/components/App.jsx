// import { useState } from 'react';
import React, {useState, useEffect} from "react";
import Header from "./Header";
import PetList from "./PetList";
import Footer from "./Footer";
import PetArea from "./PetArea";
import PropTypes from "prop-types";
import '../css/App.css';
import { useParams } from "react-router-dom";
import { createPets } from "../fakePets";
//import { getDatabase, ref, onValue, set } from "firebase/database";
//import { database } from "../firebase"; //your firebase setup

function App() {
  const { spiritPet } = useParams();
  const [pets, setPets] = useState({});
  const [currentPetInfo, setcurrentPetInfo] = useState({});

  useEffect(() => {
    if(!spiritPet) {
      console.error("O wow you do not have a spirit animal");
      return;
    }

    // const localStoreageRef = localStorage.getItem(spiritPet);
    // if(localStoreageRef) {
    //   setPets(JSON.parse(localStoreageRef));
    // }

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
   * Function to update the pets list. It accepts the 
   * pet ID, if the pet is new they it will just add the new pet
   * IF the pet already has an ID then it will just update that pet.
   * This should be a 2 for one. :) hopfully the same id are not chosen twice.
   */
  function updatePets ( petId, newPet ) {
    //copy list
    const newPets = {...pets};
    console.log(newPets);
    newPets[petId] = newPet;
    setPets(newPets);
    setcurrentPetInfo(newPets[petId]);
  }

    /**
   * Function to delete a pet from the pets list
   * using a key value pair that will use the pet ID as the key in the 
   * pet list.
   */
    function deleteAPet(petId) {
      setcurrentPetInfo(null);
      const newPets = {...pets};
      newPets[petId] = null;
      delete newPets[petId];
      setPets(newPets);
      
    }

  /**
   * This function will identify the pet that is selected in the pet list 
   * and then will pass that info to the petdispaly to show in the main pet area.
   */
  function currentPet (id) {
    setcurrentPetInfo(pets[id]);
  }

  function fakePets(){
    const newPets = createPets();
    setPets(newPets);
    localStorage.setItem(spiritPet, JSON.stringify(pets));
  }


  return (
    <>
    <Header />
    <main>
    <PetList 
      currentPet={currentPet}
      pets={pets}
      currentPetInfo={currentPetInfo}
    />
    <PetArea 
      currentPet={currentPet}
      updatePets ={updatePets}
      deleteAPet={deleteAPet}
      fakePets={fakePets}
      currentPetInfo={currentPetInfo}
    />
    </main> 
    <Footer />
    </>
  )
}

App.propTypes ={
  currentPet : PropTypes.object,
  pets: PropTypes.object,
  updatePet: PropTypes.func,
  addPet: PropTypes.func,
  petSelected: PropTypes.object
}

export default App;
