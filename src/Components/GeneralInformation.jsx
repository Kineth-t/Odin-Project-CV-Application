function GeneralInformation({ data, onChange }) {
    return (<>
        <b><input type="text" placeholder="Name" style={{fontSize:"2em",textAlign:"center"}} className="nameInput"
        onChange={(e) => onChange({ ...data, fullName: e.target.value })}/></b>
        <div className="generalInfoContainer">
            <input type="text" placeholder="Phone Number" className="phoneInput"
            onChange={(e) => onChange({ ...data, phone: e.target.value })}/>
            <span>|</span>
            <input type="email" placeholder="Email" className="emailInput"
            onChange={(e) => onChange({ ...data, email: e.target.value })}/>
            <span>|</span>
            <input type="text" placeholder="Location" className="locationInput"
            onChange={(e) => onChange({ ...data, lcoation: e.target.value })}/>
            <span>|</span>
            <input type="link" placeholder="LinkedIn / Github" className="linkInput"
            onChange={(e) => onChange({ ...data, link: e.target.value })}/>
        </div>
    </>
    )
}

export default GeneralInformation;