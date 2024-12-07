import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";
import './home.css';
import Resume from '../../assets/docs/resume.pdf'
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme, setTheme] = useTheme()
    //handle theme
    const handleTheme = () => {
      setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
  
  return (
    <>
    <div className="container-fluid home-container " id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === 'light'? (<BsFillMoonStarsFill size={30}/>) : (<BsFillSunFill size={30}/>)}

      </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi👋 I'm a </h2>
        <h1>
        <Typewriter
  options={{
    strings: [
      "FullStack-Developer !",
      "MERN Developer !",
      "Software Developer!",
    ],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        </Fade>
        <Fade bottom>
        <div className="home-buttons">
          <button className="btn btn-hire">Hire me</button>
          <a className="btn btn-cv" href={Resume} download="C:/Users/nikhi/Downloads/22epccl036%20(3).pdf">My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    </>
  )
}

export default Home