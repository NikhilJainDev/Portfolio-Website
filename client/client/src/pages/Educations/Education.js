import React from 'react';
// import { MdSchool } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>

<div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        🎓 📚 Academic Records
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022-2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech, CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rajasthan Tecnical University, Kota
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019-2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">10<sup>th</sup> & 12 <sup>th</sup></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shri Oswal Jain Sr.Sec School, Alwar
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


     
    </>
  )
}

export default Education