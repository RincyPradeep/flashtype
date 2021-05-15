import React from 'react'
import './TestLetter.css'

export const TestLetter = ({individualLetterInfo}) => {
    
     const {status} =individualLetterInfo    // const status = individualLetterInfo.status;

    //  Method 1
    // let statusClass;
    // if(status === "correct")
    // {
    //     statusClass = 'test-letter-correct'
    // }else if(status === "incorrect")
    // {
    //     statusClass = 'test-letter-incorrect'
    // }else{
    //     statusClass = 'test-letter-not-attempted'
    // }

    // Method 2
    const statusClass={
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-attempted'
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}
