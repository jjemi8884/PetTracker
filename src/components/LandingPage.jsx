/**
 * Justin Jemison 
 * 11/25/2024
 * 
 * A openign page that will have a little fun with choosing your sprit animal.
 * It really is kind of basic but I was learning more about routers in React
 * Man there is so much to learn on React. Its kind of daunting.
 * 
 */

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomSpiritAnimal } from "../helpers";


const Login = () => {
  const spirit = useRef();
  
  const navigate = useNavigate();

  const loadPetTracker = (event) => {
    const spiritPet = spirit.current.value;

   
    event.preventDefault();
    navigate(`/userID/${spiritPet}`);
  };

  return (
    <>
    <h1>Welcome to the Pet Tracker</h1>
    <h2>Please input your spirit animal or use the random animal to enter the Pet Tracker App!</h2>
    <form className="store-selector" onSubmit={loadPetTracker}>
      <input
        type="text"
        ref={spirit}
        required
        defaultValue={getRandomSpiritAnimal()}
        />
      <button type="submit">Sign In</button>
    </form>
    </>
  );
};

export default Login;
