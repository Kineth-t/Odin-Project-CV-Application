import { useState } from "react"
import Project from "./Project"

function Projects() {
    const [projectList, setProjectList] = useState([1]);
    const [nextId, setNextId] = useState(2);

    const addProject = () => {
        setProjectList([...projectList, nextId])
        setNextId(nextId + 1)
    }

    const removeProject = (idToRemove) => {
        if (projectList.length > 1) {
            setProjectList(projectList.filter((id) => id !== idToRemove));
        }
    }

    return (
        <>
            <div className="projectSection" >
                <h2 style={{marginBottom:"-5px"}}>Projects</h2>
                <hr></hr>
                {projectList.map((id) => (
                    <Project 
                    key={id}
                    onRemove={() => removeProject(id)}
                    showRemove={projectList.length > 1}
                    />
                ))}
            </div>
            <button onClick={addProject}>Add</button>
        </>
    )
}

export default Projects;