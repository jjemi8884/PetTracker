/**
 * Justin Jemison 
 * 11/25/2024
 * 
 * A openign page that will have a little fun with choosing your sprit animal.
 * It really is kind of basic but I was learning more about routers in React
 * Man there is so much to learn on React. Its kind of daunting.
 * 
 */

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomSpiritAnimal } from "../helpers";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { fbApp } from "../firebase"; // Your Firebase setup
import { GithubAuthProvider } from "firebase/auth";

// Initialize Firebase Auth and Database
const auth = getAuth(fbApp);
const database = getDatabase(fbApp);

const LandingPage = () => {

  const navigate = useNavigate();

  // UseEffect for checking authentication state on page load or refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        authHandler({ user });
      }
    });
    return () => unsubscribe(); // Cleanup the subscription
    }, []);

  /**
   * funciton to handle updating the data of hte autho and putting that data in good places. 
   * @param {data from the autho} authData 
   */
  const authHandler = async (authData) => {
    //set the state of the loginInfo with the user
    
    console.log(authData)
    const loginInfo = authData.user.uid;
    //set the firebase with some medaData
    // Save the new pets data to Firebase
    if(loginInfo){
      const userRef = ref(database, `${loginInfo}/userInfo/name`);
      set(userRef, authData.user.displayName)
      .then(() => {
        navigate(`/userID/${loginInfo}`)
      })
      .catch((error) => console.error("Error adding user to Firebase:", error));
    }
  };


  const authenticate = (providerName) => {

    let provider;
    if (providerName === "Github") {
      provider = new GithubAuthProvider();
    } else {
      console.log("not correct providerName");
    }

    signInWithPopup(auth, provider)
    .then(authHandler)
    .catch((error) => console.error("Error during authentication:", error));

  }

  


  if(false){
      return (
    <>
    <h1>Welcome to the Pet Tracker</h1>
    <h2>Please input your spirit animal or use the random animal to enter the Pet Tracker App!</h2>
    <form className="info-selector" onSubmit={() => {authenticate("Github")}}>
      <input
        type="text"
        ref={spirit}
        required
        defaultValue={getRandomSpiritAnimal()}
        />
      <button type="submit">Sign In</button>
      <button className="github" type="submit">
      Log In With GitHub
    </button>
    </form>
    </>
  );
  } else {
    return (
      <>
        <h1>Welcome to the Pet Tracker</h1>
        <h2>Please sign into the App.</h2>
            <button className="github" name="gitBtn" type="button" onClick={() => authenticate("Github")}>
              Log In With GitHub
            </button>
     
      </>
  )}
}


export default LandingPage;
