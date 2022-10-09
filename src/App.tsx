import './App.css'
import React from 'react'
import ActiveError from './components/ActiveError'
import LineBar from './components/LineBar'
import PerformanceGraph from './components/PerformanceGraph'

const App: React.FC = () => {
    return (
        <div className='App'>
            <LineBar />
            <ActiveError />
            <PerformanceGraph />
        </div>
    )
}

export default App
