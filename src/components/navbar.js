import React from 'react';
import { NavLink } from 'react-router-dom';

const navBar = () => {
    return (

        <div>
            <div className="header">
                <NavLink to="/" className="logo">CompanyLogo</NavLink>
                <div className="header-right">
                    <NavLink className="active" to="/blogs">Home</NavLink>
                    <NavLink to='/new'>Contact</NavLink>
                    <NavLink to="/blogs/:id">About</NavLink>
                </div>
            </div>
        </div>
    )
}

export default navBar;