/***
 * Justin Jemison
 * 11/25/2024
 * 
 * THis container will render the pet area for displaying the pets and also will hold the login funciton for authenication that
 * will be passes the methods from App to use for authentication. 
*/
import React from "react";
import PetForm from "./PetForm";
import "../css/petArea.css";

export default function PetArea ({petDisplayed, addToPets, updatePets, deleteAPets})  {

    function updatePet (target) {
        
        const pet = {
            "petName" : target.petName,
            "dob" : target.dob,
            "gender" : target.gender
        };
        updatePets(petDisplayed.petId, pet);
        console.log("Updated pet");
    }

    function addNewPet(target) {
        const pet = {
            "petId" : crypto.randomUUID(),
            "petName" : target.petName.value,
            "gender" : target.gender.value,
            "dob" : target.dob.value
        };

        addToPets(pet);
        console.log("Added new pet to the list");
    }

    function deletePet() {
        deleteAPets(petDisplayed.petId);
        console.log("pet Deleted");
    }
    
    return (
        <>
        <form className="petAreaForm">
            <div className="buttonArea">
            <button onClick={() => addNewPet()}>Add Compainion</button>
            <button onClick={() => updatePet()}>Update Companion</button>
            <button onClick={() => deletePet()}>Delete Companion</button>
            {()=> {
                if(petDisplayed) {
                    <div className="petDisplayed">
                        <p>{petDisplayed.petName}</p>
                        <p>{petDisplayed.age}</p>
                        <p>{petDisplayed.gender}</p>
                    </div>
                } else{
                    <p>No pet Selected</p>
                }           
            }}
            </div>
        </form>
        </>
    )

    
}

