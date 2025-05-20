function GeneralInformation() {
    return (<>
        <b><input type="text" placeholder="Name" style={{fontSize:"2em",textAlign:"center"}} className="nameInput"/></b>
        <div className="generalInfoContainer">
            <input type="text" placeholder="Phone Number" className="phoneInput"/>
            <span>|</span>
            <input type="email" placeholder="Email" className="emailInput"/>
            <span>|</span>
            <input type="text" placeholder="Location" className="locationInput"/>
            <span>|</span>
            <input type="link" placeholder="LinkedIn / Github" className="linkInput"/>
        </div>
    </>
    )
}

export default GeneralInformation;