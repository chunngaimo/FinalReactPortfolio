import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import logo1 from './logo1.jpg';
import logo2 from './erp.jpg';
import logo3 from './download.jpg';
import scedular from './scedular.JPG';
import password_gen from './password-generator.JPG';
import time_attack from './time-attack.JPG';
import note from './Note-taker.JPG';
import weather from './weather.JPG';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';



export default function Project()
{ return(
<div id="Project" style ={{paddingTop:"30px"}}className="container">
<h1>Portfolio</h1>
<Grid container spacing={24}>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={logo1} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Budget-Tracker</MDBCardTitle>
        <MDBCardText>
      It is an information management system for the daily household expense to visualize the daily routine data. 
      <br/><a href="https://budget-tracker-nemo.herokuapp.com/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/pwa-budget-tracker"> Github Repository</a>
        </MDBCardText>
     
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={logo2} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Tech-Blog</MDBCardTitle>
        <MDBCardText>
       It is the web application for the purpose of blogging for the new technologies
       <br/><a href="https://tech-blog-nemo.herokuapp.com/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/Model-View-Controller-MVC-techBlog"> Github Repository</a>
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={logo3} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>What's Happening</MDBCardTitle>
        <MDBCardText>
       It is the most advanced and used web application related to whats happening in the world.
       <br/><a href="https://teamtoo222.github.io/Project-1-UofT/"> Check Now</a><br/>
     <a href="https://github.com/Teamtoo222/Project-1-UofT"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={note} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Note-Taker</MDBCardTitle>
        <MDBCardText>
        NoteTaker is the fastest and best looking note taking application out there. It is also the easiest to use. Your edits get saved automatically.
       <br/><a href="https://note-taker-nemo.herokuapp.com/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/noteTakerWithExpress"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={scedular} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Work-Day-Scheduler</MDBCardTitle>
        <MDBCardText>
        This is a simple work day calendar application that allows a user to save events for each hour of the day by using the starter code provided.
       <br/><a href="https://chunngaimo.github.io/work-day-scheduler/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/work-day-scheduler"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={password_gen} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Password-Generator</MDBCardTitle>
        <MDBCardText>
        Password Generator to create secure passwords that are impossible to crack on your device without sending them across the Internet.
       <br/><a href="https://chunngaimo.github.io/password-generator/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/password-generator"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={weather} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Weather-Dashboard</MDBCardTitle>
        <MDBCardText>
        View complete climate conditions with our weather dashboard, built for localized data monitoring, analyzed by city or even specific sub-regions. Comply to global norms with our Celsius/Fahrenheit toggle and keep an eye on acceptable thresholds, ensuring air quality remains in-line.
       <br/><a href="https://chunngaimo.github.io/Weather-Dashboard/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/Weather-Dashboard"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
  <Grid item md={3}>
  <MDBCard style={{ maxWidth: '17rem' }}>
      <MDBCardImage src={time_attack} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Timed-Quiz</MDBCardTitle>
        <MDBCardText>
        Generate user engagement and reinforce brand visibility with a Timed Quiz. Participants intend to answer all closed questions in the shortest time possible
       <br/><a href="https://chunngaimo.github.io/timed-quiz/"> Check Now</a><br/>
     <a href="https://github.com/chunngaimo/timed-quiz"> Github Repository</a> 
       </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </Grid>
</Grid>
       
</div>
);
}