import { useState } from 'react';

function Education({ onRemove, showRemove }) {
    const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);

    const handleButtonClick = () => {
        setIsCurrentlyStudying(!isCurrentlyStudying);
    };

    return (
        <>
            <div className="educationForm">
                <textarea name="" id="" className="educationTextarea"></textarea>
                <div className="educationDate">
                    <input type="month" />
                    <span>-</span>
                    {isCurrentlyStudying ? (
                        <span>Present</span>
                    ) : (
                        <input type="month" />
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
