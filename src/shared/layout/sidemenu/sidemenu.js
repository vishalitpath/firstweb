import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

function SideMenu(props) {
    return (
        <div>
            <div class="sidebar">
                <Link to="/dashboard">Dashboard</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/displaydetails">Display Details</Link>
            </div>
            <div class="content">
                {props.content}
            </div>
        </div>
    )
}

export default SideMenu;
