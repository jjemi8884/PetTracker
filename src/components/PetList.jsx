/**
 * Justin Jemison 
 * 11/17/2024
 * 
 * THis container wil store the list of pets by their first names.
 * I tiwll itterate throught the list to pick out the first name and then create 
 * a link that will return what pet will be displayed on the main info screen
 *
 */
import React from "react";

const PetList = (props) => (

    <div className="sideBar">
       <h3>Companion Names </h3>
        {props.state.pets.map(pet, index) => {
            <a link= >
        })}
    </div>
)

export default PetList;
