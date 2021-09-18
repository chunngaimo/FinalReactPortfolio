import React, { Component } from 'react';
import logo from './logo.jpg';
import logo2 from './logo2.jpg';
export default function About()
{
   return(
    <>
           <div id="Aboutme" className="container" >
             <div className="row">
              <div className="col-6">
                   <img src={logo} width="120" height="120" style={{paddingTop:"10px"}}/>
                   <h2>About me</h2>
                   <p style={{animationDuration:"4s"}}>
                   <b>Full-Stack Web Developer</b><br/>

Hello, My name is Nemo. I am a Full-Stack Web Developer. if you have any project or if you want me to make a website for your business please feel free to contact me. I will make sure to respond as soon as possible. I will put in 100% effort towards the work until you are 100% satisfied with the result. Now I completed many small projects and 3 major projects in React.js
and Node.js and deploy two apps in React Native. I have strong bugs hunting and debugging
skills. I'm super excited to learn more technologies and implement innovative ideas. My aim
is to contribute positively in society with the help of my skills, knowledge, and attitude.
 
                   </p>
                   </div>
          
                   </div>
            
               
           </div>
       </>
   ); 
}