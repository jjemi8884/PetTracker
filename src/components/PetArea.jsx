/***
 * Justin Jemison
 * 11/25/2024
 * 
 * THis container will render the pet area for displaying the pets and also will hold the login funciton for authenication that
 * will be passes the methods from App to use for authentication. 
*/
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";
import { getDatabase, ref, get, set } from "firebase/database";
import { firebaseApp } from "../firebase";



// const auth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);



export default function PetArea (petSelected, addPet, updatePet, accountName)  => {

    // const [useId, setUdi] = useState(null);
    // const [owner, setOwner] = useState(null);

    //usetEffect for checking authentication state on page load or refresh
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChange(auth, (user) => {
    //         if(user) {
    //             authHandler({ user });
    //         }
    //     });
    //     return () => unsubscribe();
    // }, [])

    // // Check for user ID in local storage and authenticate
    // useEffect(() => {
    //     const storedUid = localStroage.getItem("uid");
    //     if(sotredUid) {
    //         authHandler({ user: {uid: storedUid }});
    //     }

    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             authHandler({ user });
    //         }
    //     });
    //     return () => unsubscribe();
    // }, []);

    // const authHandler = async (authData) => {
    //     const storeRef = ref(database, userID)
    // }
   return (
    <petFrom 
        petSelected={petSelected}
        addPet={addPet}
        updatePet={updatePet}
    />    
   )
    
    
}

PetArea.propTypes={
    petSelected: PropTypes.object,
    addPet: PropTypes.func,
    updatePet: PropTypes.func
}


export default PetArea;