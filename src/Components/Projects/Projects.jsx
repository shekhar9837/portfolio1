import React from 'react'
import ProjectCard from './ProjectCard'; // import the ProjectCard component
import './projects.css' // import the CSS file

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    image: 'https://via.placeholder.com/300x200' // replace with actual image URL
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
    image: 'https://via.placeholder.com/300x200' // replace with actual image URL
  },
  {
    title: 'Project 3',
    description: 'This is a description of Project 3.',
    image: 'https://via.placeholder.com/300x200' // replace with actual image URL
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;