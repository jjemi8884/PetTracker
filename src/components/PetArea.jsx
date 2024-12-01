/***
 * Justin Jemison
 * 11/25/2024
 * 
 * THis container will render the pet area for displaying the pets and also will hold the login funciton for authenication that
 * will be passes the methods from App to use for authentication. 
*/
import React,{useState} from "react";
import PetForm from "./PetForm";
import "../css/petArea.css";
import PropTypes from "prop-types";
import Pet from "./Pet"
import { createPets } from "../fakePets";


export default function PetArea ({pets, currentPetInfo, updatePets, deleteAPet, fakePets, currentPet})  {

    PetArea.propTypes ={
        currentPet: PropTypes.func,
        currentPetInfo : PropTypes.object,
        pets: PropTypes.object,
        updatePets: PropTypes.func,
        deleteAPets: PropTypes.func,
        fakePets: PropTypes.func
      }

    const[showForm , setShowForm] = useState(false);
    

        
    function toggleShowForm() {
        if(showForm){
            setShowForm(false);
        }else{
            setShowForm(true);
        }
    }
    
    function updateAPet() {
        toggleShowForm();
    }
    
    /***
     * really on seting the id to zero and removing the info form the display
    */
   function addAPet() {
       toggleShowForm();
       currentPet(null);
    }
    
    function deletePet() {
        if(currentPetInfo){

            console.log("pet Deleted");
            deleteAPet(currentPetInfo.id);
        }
    }

    function fakePetsGen() {
        const newPets = createPets();
        fakePets(newPets);
    }

    return (
        <>
        <div className="petAreaForm">
            <div className="buttonArea">
                <button onClick={addAPet} value="Add a new Pet">Add Compainion</button>
                <button onClick={updateAPet} value="Update your Pet">Update Companion</button>
                <button onClick={deletePet} value="Remove Pet Information from System">Delete Companion</button>
                <button onClick={fakePetsGen}>Generate Some Fake Pets</button>
            </div>
            <div className="petDisplayed">
                <strong>Current Selected Pet</strong>
                {currentPetInfo && <Pet 
                  currentPetInfo= {currentPetInfo}
                />}
            </div>
       </div>
        {showForm && <PetForm 
            currentPetInfo={currentPetInfo}
            updatePets={updatePets}
    
        />}
        </>
    )

  
    
}

