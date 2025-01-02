import React from "react";
import "./Projects.css";
import Tada from 'react-reveal/Tada';
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         <i><b>
         As a Aspiring Software Developer (web) I crefted Dynamic web experiences
          I created USer friendly Websites. These are Some of My top recenet Project
          and Nowdays I am Working on Some Authentication Systems & Backend Applications
          </b></i>
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Tada>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack MERN</span>
                  <img
                    src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/web-developer.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Personal Portfolio
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/student-NikhilJain/-Personal-Portfolio-"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Software</span>
                  <img
                    src="https://acropolium.com/img/articles/the-a-z-guide-to-e-commerce-app-development-benefits-features-and-cost/img01.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MERN</span>

                  <span className="card-detail-badge">Payment Gateway</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-Commerce Fullstack Application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/student-NikhilJain/E-Commerce-App-MERN-Fullstack"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fullstack AI Application</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-IRCsYBr8ntxbgT92UCcbbDZnI2dQvwNYA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">TypeScript</span>

                  <span className="card-detail-badge">Open AI API's</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">AI Cancer Treatment APP</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Tada>
        </div>
      </div>
    </>
  );
};

export default Projects