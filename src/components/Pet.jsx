/**
 * Justin Jemison 
 * 11/25/2025
 * 
 * This object will hold the data for the Pet and display it's results. An easy form.
 * information for a pet will be gathered in this form
 * to edit, a button that allows for editing will have to first be selected then edits cna take place.
 *  
 */
import React from "react";
import PropTypes from "prop-types";
import {getAge} from "../helpers";


export default function Pet ({currentPetInfo}){
    Pet.propTypes ={
      currentPetInfo: PropTypes.object
    }
    return (
        <ul className="PetInfo noBullets">
            <li>Name: {currentPetInfo.name}</li>
            <li>Date Of Birth: {currentPetInfo.dob} </li>
            <li>Gender: {currentPetInfo.gender} </li>
            <li>Age: {getAge(currentPetInfo.dob)}</li>
            
        </ul>
    )
}