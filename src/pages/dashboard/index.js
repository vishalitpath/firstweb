import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoginControl from "../loginControl";
import UsersControl from "../loginControl/userControl";
import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import "./style.css";

const Dashboard = () => {
    const posts = [
        { id: 1, title: 'installation', content: 'we can install react from npm' },
        { id: 2, title: 'run project', content: 'we can run react project using npm start' }
    ];
    const content = posts.map((post) =>
        post.id == 1 ?
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </div> : null
    )
    return (
        <SideMenu content={
            <div>
                <h2>Dashboard</h2>
                {/* <LoginControl /> */}
                <div>
                    <UsersControl />
                </div>
                <div class="clock-div"> 
                    <text>Clock example manage by react life-cycle </text>  <Link to="/clock">clock</Link>
                </div>
                <div>
                    {/* {content} */}
                </div>
            </div>}
        />
    )
}

export default Dashboard;