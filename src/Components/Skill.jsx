function Skill({showRemove, onRemove}) {
    return (
        <>
            <div className="skillForm">
                <textarea placeholder=""></textarea>
                {showRemove && <button onClick={onRemove}>Remove</button>}
            </div>
        </>
    )
}

export default Skill