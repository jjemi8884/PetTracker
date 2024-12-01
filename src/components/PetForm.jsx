/**
 * 
 * @returns THis form will allow the user to see the current pet informaiton and be able to up
 * date the information if needed. This will also launch the
 */

import React, {useState} from "react";
import PropTypes from "prop-types";




export default function PetForm ({currentPetInfo, updatePets}) {
    const [newPetName , setNewPetName] = useState("");
    const [newPetGender, setNewPetGender] = useState("");
    const [newPetDob, setNewPetDob] = useState("");

    PetForm.propTypes ={
        currentPetInfo : PropTypes.object,
        pets: PropTypes.object,
        updatePets: PropTypes.func,
      }
    


    function handleSubmit(e) {
        e.preventDefault();
        let newPet = {
            "id" : crypto.randomUUID(),
            "name" : e.target.name.value,
            "dob" : e.target.dob.value,
            "gender": e.target.gender.value
        }
        console.log(currentPetInfo);
        if(currentPetInfo){
            newPet.id = currentPetInfo.id;
        }
        updatePets(newPet.id, newPet);
        setNewPetDob("");
        setNewPetName("");
        setNewPetGender("");
    }



    return (
        <form className="petForm" id="stupitForm" onSubmit={handleSubmit}>
           
            <input
                value={newPetName}
                type="text"
                size= "30"
                id="petName" 
                name="name"
                placeholder="Name"
                //defaultValue={"jello"}
                onChange={e => setNewPetName(e.target.value)}
                required
            />
            <input
                value={newPetDob}
                type="date" 
                id="petDob" 
                name="dob"
                //defaultValue={"2019-11-1"}
                onChange={e => setNewPetDob(e.target.value)}
                required
            />
            <input 
                value={newPetGender}
                type="text" 
                id="gender" 
                name="Gender"
                placeholder="Gender"
                //defaultValue={"female"}
                onChange={e => setNewPetGender(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}


