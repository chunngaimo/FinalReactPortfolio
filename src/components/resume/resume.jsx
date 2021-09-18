import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default function Resume()
{
    return(
        <div>
            <div className="container" style={{alignContent:"center",alignItems:"center",justifyContent:"center",paddingLeft:"25%"}}>
            <h1>Download my resume from here</h1>
            <NavLink className="btn btn-primary" style={{alignContent:"center",width:"300px"}} to="/Resume.pdf" target="_blank" download>Download PDF</NavLink>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        </div>
    );
}