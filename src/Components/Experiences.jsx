import { useState } from "react";
import Experience from "./Experience"

function Experiences() {
    const [experienceList, setExperienceList] = useState([1]);
    const [nextId, setNextId] = useState(2); // Track next ID to assign

    
    const addExperience = () => {
        setExperienceList([...experienceList, nextId]);
        setNextId(nextId + 1)
    };

    const removeExperience = (indexToRemove) => {
        if (experienceList.length > 1) { // Keep at least one Experience
            setExperienceList(experienceList.filter((index) => index !== indexToRemove));
        }
    };

    return (
        <>
            <div className="experienceSection">
                <h2 style={{marginBottom:"-5px"}}>Experience</h2>
                <hr></hr>
                {experienceList.map((id) => (
                    <Experience
                    key={id} 
                    onRemove={() => removeExperience(id)}
                    showRemove={experienceList.length > 1}/>
                ))}
            </div>
            <button onClick={addExperience} className="ignore-for-image">Add</button>
        </>
    )
}

export default Experiences;