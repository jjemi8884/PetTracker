/***
 * Justin Jemison
 * 11/25/2024
 * 
 * THis container will render the pet area for displaying the pets and also will hold the login funciton for authenication that
 * will be passes the methods from App to use for authentication. 
*/
import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";






function PetArea (petSelected, addPet, updatePet) {
   
   
    return (
        <>
            <Pet 
                petSelected={petSelected}
                updatePet={updatePet}
            />
            <button type="button" 
            onClick={addPet}
            >
                Add New Pet
            </button>
        </>
    )
}

PetArea.propTypes={
    petSelected: PropTypes.object,
    addPet: PropTypes.func,
    updatePet: PropTypes.func
}


export default PetArea;