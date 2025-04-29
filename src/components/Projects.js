import React from 'react';
import './Projects.css';


const Projects = () => {
  const projects = [
    {
      title: "BookIt",
      description:
        "A travel and book discovery platform where users can search for any place in the world and explore books related to that destination. Integrated with Amazon, Flipkart, Spotify, and Audible for direct access to purchase or listen.",
      techStack: ["ReactJS", "JavaScript", "CSS", "REST APIs"],
      liveLink: "https://bookit-travel.netlify.app",
      repoLink: "https://github.com/Paramita-Das/bookit",
      image: "bookit.png", 
    },
    {
        title: "Paint Dealers B2B App",
        description:
          "A B2B e-commerce mobile application built using React Native for paint dealers to browse product catalogs, place orders, view order history, download reports, check account statements, and explore company content. Designed for efficient dealer management and ordering.",
        techStack: ["React Native", "JavaScript", "Redux", "REST APIs"],
        liveLink: "", // Leave empty or link to APK/testflight if available
        repoLink: "", // Optional: private repo or demo video link
        image: "b2b-app.png",
        storeLink: "https://play.google.com/store/apps/details?id=abg.opusdealerconnect1.com", 
      },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )} {project.storeLink && (
            <a href={project.storeLink} target="_blank" rel="noopener noreferrer">
              View on Play Store
            </a>
          )}

        </div>
      ))}
    </section>
  );
};

export default Projects;
