import React from 'react';
import './Projects.css';

const Projects = () => {
  // Technology icons mapping
  const techIcons = {
    'REACT': 'fab fa-react',
    'TAILWIND CSS': 'fab fa-css3-alt',
    'VITE': 'fas fa-bolt',
    'NODE JS': 'fab fa-node-js',
    'EXPRESS JS': 'fab fa-node-js',
    'MONGODB': 'fas fa-database',
    'MULTER': 'fas fa-upload',
    'JWT': 'fas fa-key',
    'GIT(HUB)': 'fab fa-github',
    'JAVASCRIPT': 'fab fa-js',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'NEXT.JS': 'fab fa-react',
    'FRAMER MOTION': 'fas fa-film'
  };

  const projects = [
    {
      name: 'Storify',
      type: 'Public',
      description: 'The StoriFy app is a file storage & management system that allows users to upload, manage, share and organize their files easily.',
      technologies: ['REACT','TAILWIND CSS','VITE', 'NODE JS', 'EXPRESS JS', 'MONGODB', 'MULTER', 'JWT', 'GIT(HUB)'],
      image: "/images/project1.png",
      liveLink: "https://storify-app.vercel.app/",
      githubLink: "https://github.com/devUbaid/Storify"
    },
    {
      name: 'Expense Analyzer',
      type: 'Public',
      description: 'A simple web application built with the MERN stack. This app is designed to help users take charge of their daily finances and manage expenses efficiently..',
      technologies: [ 'REACT', 'NODE JS','EXPRESS JS', 'MONGODB', 'JAVASCRIPT', 'JWT', 'GIT(HUB)'],
      image: "/images/project2.png",
      liveLink: "https://expense-analyzer-app.vercel.app/",
      githubLink: "https://github.com/devUbaid/ExpenseAnalyzer-Frontend"
    },
    {
      name: 'Portfolio Website',
      type: 'Public',
      description: 'A responsive, modern portfolio showcasing my skills, projects, and creative approach to web development and design.',
      technologies: ['REACT', 'NEXT.JS', 'TAILWIND CSS', 'FRAMER MOTION', 'JAVASCRIPT', 'HTML5', 'CSS3'],
      image: "/images/project3.png",
      liveLink: "https://mohdubaidportfolio.vercel.app/",
      githubLink: "https://github.com/devUbaid/Portfolio-"
    },
    {
      name: 'CodePen Clone',
      type: 'Public',
      description: 'CodePen is a web application built with React.js that provides a Dynamic , Responsive and interactive coding playground.',
      technologies: ['REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'GIT(HUB)'],
      image: "/images/project4.png",
      liveLink: "https://code-pen-cloneapp.vercel.app/",
      githubLink: "https://github.com/devUbaid/codePen"
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="featured-projects-section">
        <div className="featured-projects-header">
          <span className="section-label">UX AND FULL STACK</span>
          <h2>Featured Projects</h2>
          <p className="subtitle">Focused on the experience, driven by the engineering.</p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <div className="project-header">
                  <h2>{project.name}</h2>
                  <span className="project-type"><i className="fab fa-github"></i>{project.type}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      <i className={techIcons[tech] || 'fas fa-code'}></i>
                      <span className="tech-name">{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-arrow">→</a>
                  <div className="action-buttons">
                    <a href={project.liveLink} className="btn btn-live" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Live
                    </a>
                    <a href={project.githubLink} className="btn btn-github" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-mockup">
                <img src={project.image} alt={`${project.name} Mockup`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;