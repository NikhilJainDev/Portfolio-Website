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
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Python Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Learn & Build, Jaipur
              </h4>
              <p>
                Learned Python From Basic to Adv. and It's Libraries like Numpy,
                 pandas, and Matplotlib
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
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
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Data Aalyst
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Data Bricks, Noida, UP
              </h4>
              <p>
                Cleaning Records, Maintaning, Data Retrival and Data
                Data Analyst Records.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </ >
  )
}

export default work;