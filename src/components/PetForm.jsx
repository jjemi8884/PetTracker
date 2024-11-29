/**
 * 
 * @returns THis form will allow the user to see the current pet informaiton and be able to up
 * date the information if needed. This will also launch the
 */

import React from "react";
import PropTypes from "prop-types";


const PetForm = ({petSelected, addPet, updatePet}) => {


    return (
        <form className="pet" onSubmit={this.createPet}>
            <label htmlFor="petName">Name: {petName}</label>
            <input className="petInput" ref={this.nameRef} name="petName"></input>
            <label htmlFor="gender">Gender: {gender}</label>
            <input className="petInput" name="gender"></input>
            <label htmlFor="dob">Date Of birth: {dob}</label>
            <input className="petInput" name="dob"></input>
            <button className="petInput" type="submit">Submit</button>
            <button className="petInput" type="reset" >Cancel Update</button> 
        </form>
    )
}

PetForm.propTypes={
    petSelected: PropTypes.object,
    addPet: PropTypes.func,
    updatePet: PropTypes.func
}

return default AddPetForm;