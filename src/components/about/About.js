import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="synopsis-title">SYNOPSIS</h2>
        <h1 className="about-title">About Me</h1>

        <p className="about-description">
          With a diverse skill set that includes both front-end and back-end
          development, UI design. I am Passionate about problem-solving,
          continuous learning, and contributing to innovative solutions.
        </p>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/aboutme.jpg"
              alt="Mohd Ubaid"
              className="personal-image"
            />
          </div>

          <div className="about-details">
            <div className="detail-card soft-skills">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5.5L10 9l-1 2-2 1 3 3 1 5h4l1-5 3-3-2-1-1-2z" />
                  <circle cx="12" cy="8" r="5" />
                  <line x1="12" y1="15" x2="12" y2="22" />
                </svg>
              </div>
              <h3>Softskills that pay the bills</h3>
              <p>
                In addition to my design and technical expertise—I also have
                strong communication, time management, and multitasking
                skills—honed through my experience in the field. Outside of
                work, I like to explore the wonders of nature through travel and staying
                active through sport such as cricket. I am confident in my
                ability to bring passion and value to any project.
              </p>
            </div>

            <div className="detail-card research-planning">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="13" x2="12" y2="17" />
                  <line x1="10" y1="15" x2="14" y2="15" />
                </svg>
              </div>
              <h3>Reasearch and planning</h3>
              <p>
                One of my favorite aspects of creating is planning the
                architecture of a project. From Design Systems to Brand
                Strategy—I enjoy working with the many touch points of user
                experience.
              </p>

              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">🔍</span>
                  User Interface
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📊</span>
                  Digital Strategy
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎨</span>
                  Design Systems
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🚀</span>
                  Product Strategy
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🏁</span>
                  Product Testing
                </div>
                <div className="skill-item">
                  <span className="skill-icon">⚙️</span>
                  Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
