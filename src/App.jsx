import React, { useState } from 'react'
import GeneralInformation from './Components/GeneralInformation'
import Educations from './Components/Educations'
import Experiences from './Components/Experiences'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './App.css'
import DownloadImageButton from './Components/DownloadImageButton'



function App() {
    const [cvData, setCvData] = useState({
        generalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        link: ''},
        educations: [{id:1, 
        }],
        experiences: [1],
    })

    return (
        <>
            <div id="resume" style={{ padding: '40px', margin: '20px', background: 'white' }}>
                <GeneralInformation data={cvData.generalInfo}
                onChange={(newInfo) => setCvData((prev) => ({ ...prev, generalInfo: newInfo }))}/>
                <Educations data={cvData.educations}
                onChange={(newInfo) => setCvData((prev) => ({...prev, educations: newInfo}))}/>
                <Experiences />
                <Projects />
                <Skills />
            </div>
            <DownloadImageButton />
        </>
    )
}

export default App