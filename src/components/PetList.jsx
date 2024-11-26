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
// import fbApp from "../firebase";
// import { getAuth, onAuthStateChaged, signInWithPopup, signOut} from "firebase/auth";
// import Login from "./Login";
// import {GithubAuthProvider} from "firebase/auth";
// import 

//start the firebase application
//const auth = getAuth(fbApp);

//going to need to have pets, 
function PetList ({pets, currentPet})  {

    return (
        <div className="sideBar">
            <h3>Companion Names </h3>
            <ul className="petFirstList">
                {Object.keys(pets).map((key) => (
                    <PetNameList
                    key={key}
                    currentPet={currentPet}
                    petName={pets[key].details.petName}
                    />
                ))}
            </ul>
        </div>
    )
}

PetList.propTypes = {
    pets: PropTypes.arrayOf(PropTypes.object),
    currentPet: PropTypes.func 
}

export default PetList;
