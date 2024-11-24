import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
//import { getFunName } from "../helpers";


const Login = () => {
  const myUserName = useRef();
  const myPassword = useRef();
  const navigate = useNavigate();

  const loadPetTracker = (event) => {
    //const userName = myUserName.current.value;

    //check for user id with fetch calls
    const loginID = crypto.randomUUID();
    event.preventDefault();
    navigate(`/userID/${loginID}`);
  };

  return (
    <form className="store-selector" onSubmit={loadPetTracker}>
      <h2>Please Enter Login Information</h2>
      <input
        type="text"
        ref={myUserName}
        required
        placeholder="User Name"
      />
      <input
        type="password"
        ref={myPassword}
        required
        security=""
        minLength="2"
        placeholder="password"
        />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
