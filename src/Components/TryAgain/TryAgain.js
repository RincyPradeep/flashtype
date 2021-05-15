import React from 'react'
import './TryAgain.css'

function TryAgain({words,characters,wpm,startAgain}) {
    return (
        <div className="try-again">
            <h1>Test Results</h1>
            <div className="result-container">
                <p><b>characters:</b>{characters}</p>
                <p><b>words:</b>{words}</p>
                <p><b>Speed:</b>{wpm}wpm</p>
            </div>
            <div>
                <button onClick={()=>startAgain()} className="btn try-again-btn">Retry</button>
                <button onClick={()=>{window.open("https://www.facebook.com/sharer/sharer.php?", "facebook-share-dialog","width=800,height=600")}}className="btn share-btn">Share</button>
                <button onClick={()=>{window.open("https://twitter.com/intent/tweet?","Twitter","width=800,height=600")}} className="btn tweet-btn">Tweet</button>
            </div>
        </div>
    )
}

export default TryAgain
