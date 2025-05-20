import React from 'react'

function Project({ project, onUpdate, onRemove }) {
  const handleChange = (field, value) => {
    onUpdate({
      ...project,
      [field]: value
    })
  }

  return (
    <div className="project-item">
      <div className="form-group">
        <label>Project Name</label>
        <input
          type="text"
          value={project.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Project Name"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={project.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Describe what the project does and your role..."
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Technologies Used</label>
        <input
          type="text"
          value={project.technologies}
          onChange={(e) => handleChange('technologies', e.target.value)}
          placeholder="React, Node.js, MongoDB, etc."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>GitHub URL (Optional)</label>
          <input
            type="url"
            value={project.githubUrl}
            onChange={(e) => handleChange('githubUrl', e.target.value)}
            placeholder="https://github.com/username/project"
          />
        </div>
        
        <div className="form-group">
          <label>Live Demo URL (Optional)</label>
          <input
            type="url"
            value={project.liveUrl}
            onChange={(e) => handleChange('liveUrl', e.target.value)}
            placeholder="https://project-demo.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="month"
            value={project.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>End Date</label>
          <input
            type="month"
            value={project.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
          />
        </div>
      </div>

      <button 
        type="button" 
        className="remove-btn"
        onClick={onRemove}
      >
        Remove Project
      </button>
    </div>
  )
}

export default Project