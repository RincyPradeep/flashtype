import React from 'react'
import { ChallengeDetailsCard } from '../ChallengeDetailsCard/ChallengeDetailsCard';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = ({
    selectedparagraph,
    timerstarted,
    timeremaining,
    words,
    characters,
    wpm,
    testInfo,
    onInputChange
    }) => {
    return (
        <div className="typing-challenge-container">
            {/* details section */}
            <div className="details-container">
                <ChallengeDetailsCard cardname='words' cardvalue={words} />
                <ChallengeDetailsCard cardname='characters' cardvalue={characters} />
                <ChallengeDetailsCard cardname='speed' cardvalue={wpm} />
                
            </div>

            {/* Real challenge section */}
            <div className="typewriter-container">
                <TypingChallenge 
                    selectedparagraph={selectedparagraph}
                    timerstarted={timerstarted}
                    timeremaining={timeremaining}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}
