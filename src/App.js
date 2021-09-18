import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/aboutMe/aboutme';
import Footerpage from './components/footer/footer';
import Navbarz from './components/header/header';
import Project from './components/projects/project';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import  Contactus  from './components/contact/contact';
import Resume from './components/resume/resume';
function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Navbarz/>
      <Route exact path="/" component={About}/> 
      <Route exact path="/about" component={About}/> 
      <Route path="/portfolio" component={Project}/> 
   
  
      <Route exact path="/contact" component={Contactus}/> 
      <Route exact path="/Resume" component={Resume}/> 
     <Footerpage />
     </BrowserRouter>
    </div>
  );
}

export default App;
