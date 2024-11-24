// import { useState } from 'react';
import React from "react";
import Header from "./Header";
import PetList from "./PetList";


import '../css/App.css';

function App() {
  // const [count, setCount] = useState(0)



  return (
    <>
    <Header />
    <main>
    <PetList />
    </main> 
    </>
  )
}

export default App
