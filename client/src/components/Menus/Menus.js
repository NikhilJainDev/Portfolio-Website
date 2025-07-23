import React from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcGraduationCap,
  FcHome,
  FcPortraitMode,
  FcVideoProjector,
  FcVoicePresentation
} from 'react-icons/fc';
import { Link } from 'react-scroll';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Picture with Zoom Effect */}
          <motion.div
            className="navbar-profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
  src="https://cdn-icons-png.flaticon.com/512/5726/5726600.png"
  alt="Nikhil Jain"
/>
          </motion.div>

          {/* Side Nav Items with Slide In Left */}
          <motion.div
            className="nav-items"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcGraduationCap />
                  Education
                </Link>
              </div>

              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>

              <div className="nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contacts
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>

              <div className="nav-link">
                <FcAbout title="About" />
              </div>

              <div className="nav-link">
                <FcPortraitMode title="Experience" />
              </div>

              <div className="nav-link">
                <FcBiotech title="Technology" />
              </div>

              <div className="nav-link">
                <FcGraduationCap title="Education" />
              </div>

              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>

              <div className="nav-link">
                <FcVoicePresentation title="Testimonial" />
              </div>

              <div className="nav-link">
                <FcBusinessContact title="Contacts" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
