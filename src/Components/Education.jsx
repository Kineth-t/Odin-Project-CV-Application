import { useState } from 'react';

function Education({ onRemove, showRemove }) {
    const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);

    const handleButtonClick = () => {
        setIsCurrentlyStudying(!isCurrentlyStudying);
    };

    return (
        <>
            <div className="educationForm">
                <textarea className="educationTextarea" placeholder="University of Hillview
Bachelor of Science (Computer Science)
    - Major in Artificial Intelligence and Cybersecurity
    - Relevant Coursework: Algorithms, Data Structures,
      Operating Systems, Databases, Software Engineering
    - GPA: 4.5/5.0"
                style={{height:"100px"}}></textarea>
                <div className="educationDate">
                    <input type="text" 
                        minLength={8}
                        maxLength={8}
                        placeholder='MMM YYYY' />
                    <span>-</span>
                    {isCurrentlyStudying ? (
                        <span>Present</span>
                    ) : (
                        <input type="text" 
                        minLength={8}
                        maxLength={8}
                        placeholder='MMM YYYY' />
                    )}
                </div>
            </div>
            <button type="button" onClick={handleButtonClick}>
                        {isCurrentlyStudying
                            ? 'Undo currently studying'
                            : 'Click if still currently studying here'}
            </button>
            {showRemove && <button onClick={onRemove}>Remove</button>}
        </>
    );
}

export default Education;
