import React from 'react';
import './Projects.css';


const Projects = () => {
  const projects = [
    {
        title: "Birla Opus Dealer Connect",
        description:
          "A B2B e-commerce mobile application built using React Native for paint dealers to browse product catalogs, place orders, view order history, download reports, check account statements, and explore company content. Designed for efficient dealer management and ordering.",
        techStack: ["React Native", "JavaScript", "Redux", "REST APIs"],
        image: "b2b-app.png",
        playStoreLink: "https://play.google.com/store/search?q=birla+opus+dealer+connect&c=apps&hl=en_IN", 
        appStoreLink: "https://apps.apple.com/in/app/birla-opus-dealer-connect/id6476906819"
      },
      {
        title: "Reserve Bank of India",
        description:
          "The official mobile application of the Reserve Bank of India built using Ionic Angular. It provides users access to the latest press releases, current exchange and policy rates, RBI notifications, and the bank holiday list. Users can also search for IFSC and MICR codes of bank branches with ease.",
        techStack: ["Ionic", "Angular", "TypeScript", "REST APIs"],
        image: "rbi-app.png", 
        playStoreLink: "https://play.google.com/store/apps/details?id=com.reservebankofindia&hl=en_IN",
        appStoreLink: "https://apps.apple.com/in/app/reserve-bank-of-india/id1154394549"
      },
      {
        title: "BookIt",
        description:
          "A travel and book discovery platform where users can search for any place in the world and explore books related to that destination. Integrated with Amazon, Flipkart, Spotify, and Audible for direct access to purchase or listen.",
        techStack: ["ReactJS", "JavaScript", "CSS", "REST APIs"],
        liveLink: "https://bookit-travel.netlify.app",
        repoLink: "https://github.com/Paramita-Das/bookit",
        image: "bookit.png", 
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
          {(!project.playStoreLink && !project.appStoreLink) && (
  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
    Live Demo
  </a>
)}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )} 
          {project.playStoreLink && (
            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
              View on Play Store
            </a>
          )}
           {project.appStoreLink && (
            <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
              View on App Store
            </a>
          )}

        </div>
      ))}
    </section>
  );
};

export default Projects;
