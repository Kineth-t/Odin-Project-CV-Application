import React, { useState } from 'react'
import GeneralInformation from './Components/GeneralInformation'
import Educations from './Components/Educations'
import Experiences from './Components/Experiences'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './App.css'

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
            <GeneralInformation data={cvData.generalInfo}
            onChange={(newInfo) => setCvData((prev) => ({ ...prev, generalInfo: newInfo }))}/>
            <Educations />
            <Experiences />
            <Projects />
            <Skills />
        </>
    )
}

export default App