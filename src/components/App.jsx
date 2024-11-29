// import { useState } from 'react';
import React, {useState} from "react";
import Header from "./Header";
import PetList from "./PetList";
import Footer from "./Footer";
import PetArea from "./PetArea";
import PropTypes from "prop-types";
import '../css/App.css';
import { useParams } from "react-router-dom";

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

    const petTrackerRef = ref(database, `${spiritPet}/pets`);

    onValue(petTrackerRef, (snapshot) => {
      const data = snapshot.val() || {}; 
      console.log("Got the pets from the database", data);
      setPets(data);
    });

    return () => {}
  }, [spiritPet]);

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
