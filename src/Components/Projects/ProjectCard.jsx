import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  )
}

export default ProjectCard;