/**
 * Justin Jemison 
 * 11/17/2024
 * 
 * this react container will hold the header information that can be updated
 * It will have a button that can be used for future product like a menu to get to the slide show or all aminals.
 *
 */

import React from "react"
import PropTypes from "prop-types";


const Header = ({loginName, logout}) => (

  
    <header className="head">
        <button>Futrue products</button>
        <h1>Pet Information Tracker</h1>
        <div className="loging">
            <p>Loggin in as: {loginName}</p>
            <button onClick={logout} >logout</button>
        </div>
    </header>
)

Header.propTypes ={
    loginName: PropTypes.string,
    logout: PropTypes.func
}

export default Header;