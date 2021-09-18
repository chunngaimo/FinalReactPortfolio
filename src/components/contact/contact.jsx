import React, { Component } from 'react';
export default function Contactus()
{
    return (
        <div id="contact" style ={{paddingTop:"30px"}} className="container">
            <h1>Contact Me </h1><form id="contact-form" method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" required className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"  required  className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control"  required  rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form></div>

    );
}