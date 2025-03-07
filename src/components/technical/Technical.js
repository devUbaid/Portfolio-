import React from 'react';
import './Technical.css';

const TechnicalSection = () => {
  const softwareTools = [
    { name: 'CANVA', icon: 'fas fa-palette' },
    { name: 'FIGMA', icon: 'fab fa-figma' },
    { name: 'VSCODE (IDE)', icon: 'fas fa-code-branch' },
    { name: 'POSTMAN', icon: 'fas fa-paper-plane' },
    { name: 'GIT - GITHUB', icon: 'fab fa-github' },
    { name: 'DEVELOPER TOOLS', icon: 'fas fa-tools' }
  ];

  const technologies = [
    { name: 'JAVASCRIPT', icon: 'fab fa-js' },
    { name: 'NODE.JS', icon: 'fab fa-node-js' },
    { name: 'REACT', icon: 'fab fa-react' },
    { name: 'NEXT.JS', icon: 'fab fa-react' },
    { name: 'PYTHON', icon: 'fab fa-python' },
    { name: 'BOOTSTRAP', icon: 'fab fa-bootstrap' },
    { name: 'TAILWIND CSS', icon: 'fab fa-css3-alt' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'GIT', icon: 'fab fa-git-alt' },
    { name: 'MONGODB', icon: 'fas fa-database' }
  ];

  return (
    <div className="technical-section" id='case-studies'>
      <div className="technical-header">
        <h4 className="hardskills-label">HARDSKILLS</h4>
        <h2>Technical</h2>
        <p className="subtitle">
          As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages.
        </p>
      </div>
      
      <div className='technical-container'>
        <div className="technical-main">
          <div className="technical-cards">
            <div className="technical-card">
              <div className="card-icon network-icon"></div>
              <h2>Polymath foundations</h2>
              <p>
                With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="technical-card">
              <div className="card-icon grid-icon"></div>
              <h2>Software I love to work with</h2>
              <p>  
              With a passion for building digital experiences, I have worked with a wide range of tools and technologies to create seamless and impactful solutions. Here are some of the key software and frameworks I use in my development journey.
              </p>
              <div className="tools-grid">
                {softwareTools.map((tool, index) => (
                  <span key={index} className="tool-tag">
                    <i className={tool.icon}></i>
                    <span className="tool-name">{tool.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="technical-card">
              <div className="card-icon technologies-icon"></div>
              <h2>Technologies I love to build with</h2>
              <p>
                I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me.
              </p>
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tags">
                    <i className={tech.icon}></i>
                    <span className="tech-name">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="technical-background"></div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;