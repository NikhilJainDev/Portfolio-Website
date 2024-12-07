import React from 'react'
import './Menu.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {FcAbout, FcBiotech, FcBusinessContact, FcGraduationCap, FcHome, FcPortraitMode, FcVideoProjector, FcVoicePresentation} from 'react-icons/fc';
import { Link } from 'react-scroll';
const Menus = ({toggle}) => {
  return (
   <>

   {toggle ? (
    <>
    <Zoom>
    <div className="navbar-profile-pic">
        <img
        src="https://cdn-icons-png.flaticon.com/512/5726/5726600.png"
        alt="Profile Picture"
        
        />
    </div>
    </Zoom>
    <Fade left>
    <div className="nav-items">
    <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
              <FcHome/>
                Home
              </Link>
                </div>

                <div className="nav-link">
               <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
               <FcAbout/>
               About
               </Link>
                </div>


                <div className="nav-link">
               <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
               <FcGraduationCap/>
               Education
               </Link>
                </div>

                <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech/>
                Tech Stack
                </Link>
                </div>

                <div className="nav-link">
                <Link  to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector/>
                Projects
                </Link>
                </div>

                 <div className="nav-link">
               <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
               <FcPortraitMode/>
               Work Experience
               </Link>
                </div>

                <div className="nav-link">
                <Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact/>
                Contacts
                </Link>
                </div>
        </div>
    </div>
    </Fade>
    </>

   ) : (
    <>

    // Same Comment 

    <div className="nav-items">
    <div className="nav-item">
            <div className="nav-link">
                <FcHome title='Home'/>
                
                </div>

                <div className="nav-link">
                <FcAbout title='About'/>
                
                </div>

                <div className="nav-link">
                <FcPortraitMode title='Experience'/>
                
                </div>

                <div className="nav-link">
                <FcBiotech title='Technology'/>
               
                </div>

                <div className="nav-link">
                <FcGraduationCap title='Education'/>
                
                </div>

                <div className="nav-link">
                <FcVideoProjector title='Projects'/>
                
                </div>

                <div className="nav-link">
                <FcVoicePresentation title='TestiMonial'/>
                
                </div>

                <div className="nav-link">
                <FcBusinessContact title='Contacts'/>
               
                </div>
        </div>
    </div>


    </>
  
   )}
   <Fade />
    </>
   
  );
};
export default Menus;