import React, { useState } from 'react'
import GeneralInformation from './Components/GeneralInformation'
import Educations from './Components/Educations'
import Experiences from './Components/Experiences'
// import Projects from './Components/Projects'
// import Skills from './Components/Skills'
import './App.css'

function App() {
    return (
        <>
            <h1>This is a CV/Resume builder</h1>
            <GeneralInformation />
            <Educations />
            <Experiences />
        </>
    )
}

export default App