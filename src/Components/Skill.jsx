import React from 'react'

function Skill({ skill, onUpdate, onRemove }) {
  const skillCategories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Databases',
    'Tools & Technologies',
    'Languages',
    'Other'
  ]

  const handleChange = (field, value) => {
    onUpdate({
      ...skill,
      [field]: value
    })
  }

  return (
    <div className="skill-category-item">
      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select
            value={skill.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            {skillCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group flex-grow">
          <label>Skills</label>
          <input
            type="text"
            value={skill.items}
            onChange={(e) => handleChange('items', e.target.value)}
            placeholder="JavaScript, Python, React (separate with commas)"
          />
        </div>
      </div>

      <button 
        type="button" 
        className="remove-btn"
        onClick={onRemove}
      >
        Remove Category
      </button>
    </div>
  )
}

export default Skill