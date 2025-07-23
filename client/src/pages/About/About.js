import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="images/source/nikhil_image.jpg"
                alt="Profile_pic"/>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me 👨‍💻</h1>
                    <p>
                    Hello! I'm <b>Nikhil Jain</b>, a passionate Final year Computer Engineering student with an insatiable hunger for technological knowledge and innovation. 💻✨

 I am Proficient in <b>C++, Python, and Data Structures & Algorithms (DSA)</b>, I am also a Fullstack Developer, constantly learning and evolving my skills to stay ahead in this dynamic field. 🌐 My expertise lies in creating seamless and functional websites using <b><i>Node.js, Express, React, and MongoDB, with robust REST APIs</i></b>.

Currently, I’m diving deep into Python libraries to enhance my skills in <b>Data Analytics</b> 📊.

Beyond code, 🛠️ Whether it’s building web applications, analyzing data, or brainstorming the next big thing, I’m always up for the adventure!

When I'm not coding, you’ll likely find me exploring new tech trends or <b><i>dreaming about my next travel destination</i></b>. 🌟 Let’s connect and create something extraordinary together! 🚀







                    </p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About