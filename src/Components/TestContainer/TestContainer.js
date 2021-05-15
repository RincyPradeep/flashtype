import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

function TestContainer({
    selectedparagraph,
    timerstarted,
    timeremaining,
    words,
    characters,
    wpm,
    testInfo,
    onInputChange,
    startAgain
    }) {
    
    return (
        <div className="test-container">
            {
                timeremaining > 0?
                    (<div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallengeContainer 
                            selectedparagraph={selectedparagraph}
                            words={words} 
                            characters={characters} 
                            wpm={wpm}
                            timerstarted={timerstarted}
                            timeremaining={timeremaining} 
                            testInfo={testInfo}
                            onInputChange={onInputChange}
                        />
                    </div>):
                    (<div className="tryagain-container">
                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                    </div> )
            }
        </div>
    )
}

export default TestContainer
