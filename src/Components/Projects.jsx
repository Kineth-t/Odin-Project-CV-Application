import Project from './Project'

function Projects({ projects, onUpdate }) {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      description: '',
      technologies: '',
      githubUrl: '',
      liveUrl: '',
      startDate: '',
      endDate: ''
    }
    onUpdate([...projects, newProject])
  }

  const updateProject = (id, updatedProject) => {
    onUpdate(projects.map(project => 
      project.id === id ? updatedProject : project
    ))
  }

  const removeProject = (id) => {
    onUpdate(projects.filter(project => project.id !== id))
  }

  return (
    <section className="cv-section">
      <h2>Projects</h2>
      
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          onUpdate={(updatedProject) => updateProject(project.id, updatedProject)}
          onRemove={() => removeProject(project.id)}
        />
      ))}

      <button type="button" className="add-btn" onClick={addProject}>
        Add Project
      </button>
    </section>
  )
}

export default Projects