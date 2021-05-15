import React from 'react';
import { TestLetter } from '../TestLetter/TestLetter';
import './TypingChallenge.css';

export const TypingChallenge = ({ 
    selectedparagraph ,
    timeremaining, 
    timerstarted,
    testInfo,
    onInputChange
    }) => {
    console.log("########",testInfo)
    return (
        
        <div className='typing-challenge'>
            <div className='timer-container'>
                <p className='timer'>00:
                    {timeremaining >=10?timeremaining:`0${timeremaining}`}
                </p>
                <p className='timer-info'>
                    {!timerstarted && "Start typing to start the test"}
                </p>
            </div>
            <div className='textarea-container'>
                <div className='textarea-left'>
                    <div className='textarea test-paragraph'>
                        {/* { selectedparagraph } */}
                        {
                            testInfo.map((individualLetterInfo,index)=>{
                            return (<TestLetter key={index} individualLetterInfo={individualLetterInfo} />)
                            })
                        }
                    </div>
                </div>
                <div className='textarea-right'>
                    <textarea 
                        className='textarea' 
                        placeholder='start typing here...'
                        onChange={(e)=>onInputChange(e.target.value)}
                    >
                        
                    </textarea>
                </div>
            </div>
            
        </div>
    )
}
