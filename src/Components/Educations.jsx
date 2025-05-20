import Education from './Education'
import { useState } from 'react';

function Educations() {
    const [educationList, setEducationList] = useState([1]);
    
    const addEducation = () => {
        setEducationList([...educationList, educationList.length + 1]);
    };

    const removeEducation = (indexToRemove) => {
        if (educationList.length > 1) { // Keep at least one education
            setEducationList(educationList.filter((_, index) => index !== indexToRemove));
        }
    };

    return (
        <>
            <div className="educationSection">
                <h2 style={{marginBottom:"-5px"}}>Education</h2>
                <hr></hr>
                {educationList.map((index) => (
                    <Education 
                    key={index} 
                    onRemove={() => removeEducation(index)}
                    showRemove={educationList.length > 1}/>
                ))}
            </div>
            <button onClick={addEducation}>Add</button>
        </>
    )
}

export default Educations;