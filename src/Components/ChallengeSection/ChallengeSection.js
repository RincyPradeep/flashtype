import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

function ChallengeSection({
    selectedparagraph,
    timerstarted,
    timeremaining,
    words,
    characters,
    wpm,
    testInfo,
    onInputChange,
    startAgain
    })
     {
    
    return (
        <div data-aos="fade-down" className="challenge-section-container">
            <h1 className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer 
            selectedparagraph={selectedparagraph}
            timerstarted={timerstarted}
            timeremaining={timeremaining}
            words={words}
            characters={characters} 
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
            startAgain ={startAgain}
            />
        </div>
    )
}

export default ChallengeSection
