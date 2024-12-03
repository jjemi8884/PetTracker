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
import { getAuth, signOut } from "firebase/auth";
import {  ref, onValue, set } from "firebase/database";
import { database, fbApp } from "../firebase"; //your firebase setup
import { useNavigate } from "react-router-dom";

function App() {
  const { loginInfo } = useParams();
  const [pets, setPets] = useState({});
  const [currentPetInfo, setcurrentPetInfo] = useState(storageFetch);
  const [loginName, setLoginName] = useState();
  
  const navigate = useNavigate();

  

  /**
   * This is for if we wanted to store stuff local instead of firebase
   * we would put this function in the useState 
   * @returns the local storage items if there are any for the current selected pet state!
   */
  function storageFetch(){
    if(!loginInfo) {
      console.error("O wow you do not have a spirit animal");
      return;
    }

    const localStoreageRef = localStorage.getItem(loginInfo);
    if(localStoreageRef) {
     
      return JSON.parse(localStoreageRef);
      
    }else {
      return {}
    }
  }




  // Fetch data and sync with Firebase when the component mounts
  useEffect(() => {
    if (!loginInfo) {
      console.error("O wow you do not have a spirit animal");
      return;
    }
  
    // Retrieve pets from localStorage
    const localStorageRef = localStorage.getItem(loginInfo);
    if (localStorageRef) {
      setcurrentPetInfo(JSON.parse(localStorageRef));
    }

    // Reference to the pets data in Firebase
    const petsRef = ref(database, `${loginInfo}/pets`);

    // Listen for changes in the pets data
    onValue(petsRef, (snapshot) => {
      const data = snapshot.val() || {};
     // console.log("Fetched data from Firebase:", data);
      setPets(data); // Update state with data from Firebase
    });

    
    const userRef = ref(database, `${loginInfo}/userInfo`);
    
  
      onValue(userRef, (snapshot) => {
        const data = snapshot.val() || {};
        // Listen for changes in the name data
        setLoginName(data.name);    
        if(data.isAdmin){
          console.log("we have an admin here, watch out!");
          window.alert("You are a admin, woop-Dee-Do! We have Zero turst here so you can do nothing!");
        };  
      })
  
    

    // Cleanup function to remove the Firebase listener when the component unmounts
    return () => {
      // No explicit cleanup needed for onValue, but you can use `off()` if necessary
    };
  }, [loginInfo]);




  // Save currentPetInfo data to localStorage whenever it changes
  useEffect(() => {
    if (loginInfo) {
      localStorage.setItem(loginInfo, JSON.stringify(currentPetInfo));
    }
  }, [currentPetInfo, loginInfo]);

  /**
   * Function to update the pets list. It accepts the 
   * pet ID, if the pet is new they it will just add the new pet
   * IF the pet already has an ID then it will just update that pet.
   * This should be a 2 for one. :) hopfully the same id are not chosen twice.
   */
  function updatePets ( petId, newPet ) {
    //copy list
    const newPets = {...pets};
    //console.log(newPets);
    newPets[petId] = newPet;
    setPets(newPets);
    setcurrentPetInfo(newPets[petId]);

    // Save the new pets data to Firebase
    const petsRef = ref(database, `${loginInfo}/pets`);
    set(petsRef, newPets)
      .then(() => console.log("pet added to Firebase:", newPet))
      .catch((error) => console.error("Error adding pet to Firebase:", error));
  };
  

    /**
   * Function to delete a pet from the pets list
   * using a key value pair that will use the pet ID as the key in the 
   * pet list.
   */
    function deleteAPet(petId) { 
      const petRemoved = pets[petId];
      setcurrentPetInfo(null);
      const newPets = {...pets};
      newPets[petId] = null;
      delete newPets[petId];
      setPets(newPets);

         // Save the updated pets data to Firebase
      const petsRef = ref(database, `${loginInfo}/pets`);
      set(petsRef, newPets)
        .then(() => console.log("pet removed from Firebase: ", petRemoved))
        .catch((error) => console.error("Error adding pet to Firebase:", error));
      
    }

  /**
   * This function will identify the pet that is selected in the pet list 
   * and then will pass that info to the petdispaly to show in the main pet area.
   */
  function currentPet (id) {
    setcurrentPetInfo(pets[id]);
    localStorage.setItem(loginInfo, pets[id]);
  }

  /**
   * function to eaily add some pets
   */
  function fakePets(){
    const newPets = createPets();
    setPets(newPets);

     // Save the new pets data to Firebase
     const petsRef = ref(database, `${loginInfo}/pets`);
     set(petsRef, newPets)
       .then(() => console.log("pet added fake pets to Firebase:"))
       .catch((error) => console.error("Error adding pet to Firebase:", error));
  }

  
    const logout = async () => {
      console.log("Logging out!");
      await signOut(getAuth(fbApp));
      localStorage.removeItem("uid"); // Remove the uid from local storage
      setLoginName("");
      setcurrentPetInfo({});
      setPets({});
      navigate(`/`);

      //remove the user from the local storage
      localStorage.removeItem(loginInfo);
      
    };
  

  
  return (
    <>
    <Header
    loginName={loginName}
    logout={logout} />
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
