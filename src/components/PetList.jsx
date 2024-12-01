/**
 * Justin Jemison 
 * 11/17/2024
 * 
 * THis container will store the list of pets by their first names.
 * It will iterate throught the list to pick out the first name and then create 
 * a link that will return what pet will be displayed on the main info screen
 *
 */
import React  from "react";
import PropTypes from "prop-types";
import PetNameList from "./PetNameList";
import "../css/index.css";


//going to need to have pets, 
export default function PetList ({pets, currentPet, currentPetInfo})  {

    
    return (
        <div className="sideBar">
            <h3>Companion Names </h3>
            {pets.length === 0 && "No Pets listed"}
            <ul className="petFirstList noBullets">
                {Object.keys(pets).map((key) => (
                    <PetNameList
                    key={key}
                    id={pets[key].id}
                    currentPet={currentPet}
                    name={pets[key].name}
                    currentPetInfo={currentPetInfo}
                    />
                ))}
            </ul>
        </div>
    )
}

PetList.propTypes = {
    pets: PropTypes.object,
    currentPet: PropTypes.func,
    currentPetInfo: PropTypes.object
}


