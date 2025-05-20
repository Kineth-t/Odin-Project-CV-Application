import React from 'react'
import Skill from './Skill'

function Skills({ skills, onUpdate }) {
  const addSkill = () => {
    const newSkill = {
      id: Date.now(),
      category: 'Programming Languages',
      items: ''
    }
    onUpdate([...skills, newSkill])
  }

  const updateSkill = (id, updatedSkill) => {
    onUpdate(skills.map(skill => 
      skill.id === id ? updatedSkill : skill
    ))
  }

  const removeSkill = (id) => {
    onUpdate(skills.filter(skill => skill.id !== id))
  }

  return (
    <section className="cv-section">
      <h2>Skills</h2>
      
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill}
          onUpdate={(updatedSkill) => updateSkill(skill.id, updatedSkill)}
          onRemove={() => removeSkill(skill.id)}
        />
      ))}

      <button type="button" className="add-btn" onClick={addSkill}>
        Add Skill Category
      </button>
    </section>
  )
}

export default Skills