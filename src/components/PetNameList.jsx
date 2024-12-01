/**
 * this is the name list of names that will be displayed on the side.
 * when cliced will return the function of currentPet with the key (id ) of the 
 * current pet.
 * 
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/index.css";

function PetNameList({ id, name, currentPet, currentPetInfo}) {

    return (
        <li id="listPet" className="petNames">
            <p 
                onClick={()=> currentPet(id)}
                style = {{color: (currentPetInfo && name === currentPetInfo.name) ?  "rgb(77, 234, 41)":"rgba(247, 248, 243, 0.87)"}}
            >
                {name}
            </p>
        </li>
    )
}

PetNameList.propTypes ={
    id: PropTypes.string,
    name: PropTypes.string,
    currentPet: PropTypes.func,
    currentPetInfo: PropTypes.object
}

export default PetNameList;