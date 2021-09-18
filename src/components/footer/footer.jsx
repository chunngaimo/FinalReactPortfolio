import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaVoicemail, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import { faCheckSquare, faCoffee,faPhone,faExclamationCircle } from '@fortawesome/fontawesome-free-solid';
const Footerpage = () => {
  return (
    <div style={{color : "white" ,backgroundColor: "black",outerWidth:"100%",height: "calc(100% - 60px)"}}>    <MDBFooter color="black" className="font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol md="6">
          <h5 className="title">Contact Information</h5>
          <p>
          <FontAwesomeIcon icon={faPhone} />
       

:  +1647-289-8789<br/>
<FaVoicemail/>
<a href="mailto://wjy16888888@gmail.com"><button>Email</button></a><br/>
<FaGithub />
 <a href="https://github.com/chunngaimo">Github</a><br/>

<FaLinkedin/>
:  <a href="https://www.linkedin.com/in/wjy/">Linkedin</a><br/>
<FaStackOverflow/>
:  <a href="https://stackoverflow.com/users/15568976/chunngaimo">stackoverflow</a>


          </p>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
      

      </MDBContainer>
    </div>
  </MDBFooter>
  </div>
);
}

export default Footerpage;