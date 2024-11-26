/**
 * this is the name list of names that will be displayed on the side.
 * when cliced will return the function of currentPet with the key (id ) of the 
 * current pet.
 * 
 */
import React from "react";
import PropTypes from "prop-types";

function PetNameList({key, petName, currentPet }) {
    return (
        <li>
            <p onClick={currentPet(key)}>{petName}</p>
        </li>
    )
}

PetNameList.propTypes -{
    key: PropTypes.number,
    petName: PropTypes.string,
    currentPet: PropTypes.func
}

export default PetNameList;