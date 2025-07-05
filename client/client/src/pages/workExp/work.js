import React from 'react';
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './work.css';

const work = () => {
  return (
    <>
       <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" May'25 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Pinnacle Labs , Kolkata (West Bengal)
              </h4>
              <p>
                Completed a Web Development Internship at Pinnacle Labs from May 2025 to June 2025, where I was assigned real-world tasks focused on frontend development.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" May'23 - July'23"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                FullStack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Learn and Build Pvt. Ltd
              </h4>
              <p>
                Creative Dynamic Web Experiences & User Friendly Websites to Solve
                Real World Problems
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July'22 - Aug'2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Python Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                 Learn and Build Pvt. Ltd
              </h4>
              <p>
                Python Trainee at Learn and Build 
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </ >
  )
}

export default work;