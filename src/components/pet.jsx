/**
 * Justin Jemison 
 * 11/25/2025
 * 
 * This object will hold the data for the Pet and display it's results. An easy form.
 * information for a pet will be gathered in this form
 * to edit, a button that allows for editing will have to first be selected then edits cna take place.
 *  
 */
import React from "react";
import PropTypes from "prop-types";
import {getAge} from "../helpers";


class pet extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
        petName: PropTypes.string,
        gender: PropTypes.string,
        dob: PropTypes.string
        }),
        updatePet: PropTypes.func,
        addPet: PropTypes.func

        // dPO: PropTypes.string,
        // species: PropTypes.string,
        // color: PropTypes.string,
        // weight: PropTypes.number,
        // height: PropTypes.number,
        // moreImages: PropTypes.arrayOf(PropTypes.string),
        // petID: PropTypes.number

    };

    createPet = event => {
        event.preventDefault();
       
    }

    render() {
     

        return (
        <div className="petDetails">
            <p>Name: {this.props.details.petName}</p>
            <p>Gender: {this.props.details.gender}</p>
            <p>BirthDate: {getAge(this.props.details.dob)}</p>
        </div>
    )}

}

export default pet;