import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function SkillTest() {
    
    
    let [correct, setCorrect] = useState(false);
    let [answerError, setAnswerError] = useState('');

    const handleAnswerChange = (e) => {
        
        if(e.target.value === '35') {
            setAnswerError("");
            setCorrect(true);
        } else {
            setAnswerError("* Please enter the correct answer.");
            setCorrect(false);
        }
        
    }

    const history = useHistory();
    function goToWinPage(e) {
        if(correct === true) {
            e.preventDefault();
            console.log('going to win page');
            history.push('/WinPage')
        } 
    }
    return (
        <div className="grid-container skillTest showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Skill Test</h1>
                    <p>Correctly answer the skill testing question to receive the prize you have won.</p>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell gameBox">
                    <h2>Question</h2>
                    <h3>10 + 25 = ?</h3>
                    <input type="text" onChange={handleAnswerChange} placeholder="Your Answer"/>
                    <p id="skillTestError" className="errMsg">{answerError}</p>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToWinPage}><p>Submit<span>&#62;</span></p></button>
                </div>
            </div>
        </div>
    );
}

export default SkillTest