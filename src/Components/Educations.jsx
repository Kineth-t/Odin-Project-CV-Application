import Education from './Education'
import { useState } from 'react';

function Educations({}) {
    const [educationList, setEducationList] = useState([1]); // Start with one education
    const [nextId, setNextId] = useState(2); // Track next ID to assign
    
    const addEducation = () => {
        setEducationList([...educationList, nextId]);
        setNextId(nextId + 1);
    };

    const removeEducation = (idToRemove) => {
        if (educationList.length > 1) { // Keep at least one education
            setEducationList(educationList.filter(id => id !== idToRemove));
        }
    };

    return (
        <>
            <div className="educationSection">
                <h2 style={{marginBottom:"-5px"}}>Education</h2>
                <hr></hr>
                {educationList.map((id) => (
                    <Education 
                        key={id} 
                        onRemove={() => removeEducation(id)}
                        showRemove={educationList.length > 1}
                    />
                ))}
            </div>
            <button onClick={addEducation}>Add</button>
        </>
    )
}

export default Educations;