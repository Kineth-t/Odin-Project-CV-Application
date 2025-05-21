import React, { useState } from 'react'
import GeneralInformation from './Components/GeneralInformation'
import Educations from './Components/Educations'
import Experiences from './Components/Experiences'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './App.css'

function App() {
    return (
        <>
            <GeneralInformation />
            <Educations />
            <Experiences />
            <Projects />
        </>
    )
}

export default App