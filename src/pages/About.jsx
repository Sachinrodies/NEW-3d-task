import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { download } from "../assets/icons";

const About = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-card border-4 border-white relative z-10">
              <img
                src="/profile.jpg"
                alt="Sachin Jha"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff] flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                SJ
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <h1 className="head-text">
            Hello I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
             Sachin Jha
            </span>
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Fullstack developer based in India, specializing in MERN stack through
              hands-on learning and building applications.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">
          <span className="blue-gradient_text">Academic Journey</span>
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My educational journey has equipped me with both technical knowledge and practical skills.
            Here's a timeline of my academic achievements:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60% h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-card">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold text-gray-800">Updated Resume</h3>
          <p className="text-gray-600 text-center">
            Download my latest resume to learn more about my skills and experience
          </p>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <img src={download} alt="download" className="w-5 h-5" />
            Download Updated Resume
          </a>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
