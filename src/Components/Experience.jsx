import { useState } from "react";

function Experience({ onRemove, showRemove}) {
    const [stillWorkingHere, setStillWorkingHere] = useState(false)

    const handleButtonClick = () => {
        setStillWorkingHere(!stillWorkingHere)
    }

    return (
        <>
            <div className="educationForm">
                <textarea className="experienceTextarea" placeholder="Greenfield Logistics
Operations Manager
    - Coordinated daily shipping schedules and ensured 
      timely dispatch of over 150 freight orders 
      per week.
    - Managed inventory tracking using Oracle NetSuite, 
      reducing discrepancies by 12% year-over-year.
    - Assisted in process optimization projects that 
      reduced warehouse downtime by 18%"
                style={{height:"140px"}}></textarea>
                <div className="experienceDate">
                    <input type="text" 
                        minLength={8}
                        maxLength={8}
                        placeholder='MMM YYYY' />
                    <span>-</span>
                    {stillWorkingHere ? (
                        <span>Present</span>
                    ) : (
                        <input type="text" 
                        minLength={8}
                        maxLength={8}
                        placeholder='MMM YYYY' />
                    )}
                </div>
            </div>
            <button type="button" onClick={handleButtonClick} className="ignore-for-image">
                        {stillWorkingHere
                            ? 'Undo currently working'
                            : 'Click if still currently working here'}
            </button>
            {showRemove && <button onClick={onRemove} className="ignore-for-image">Remove</button>}
        </>
    )
}

export default Experience;