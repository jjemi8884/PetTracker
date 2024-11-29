/**
 * 
 * @returns THis form will allow the user to see the current pet informaiton and be able to up
 * date the information if needed. This will also launch the
 */

import React from "react";



export default function PetForm (petSelected) {
    return (
        <div className="petForm">
        {!petSelected && "no pets selected"};
        
        </div>
    )
}


