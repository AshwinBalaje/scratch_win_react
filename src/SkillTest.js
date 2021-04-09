import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function SkillTest() {
    let [answer, setAnswer] = useState('');

    let[answerError, setAnswerError] = useState('');

    let [next, setNext] = useState(false);

    const handleAnswerChange = (e) => {
        
        setAnswer(e.target.value);
        console.log(answer);

        if(e.target.value === '35') {
            setAnswerError("");
            setNext(true);
        } else {
            setAnswerError("* Please enter the correct answer.");
            setNext(false);
        }
        
    }

    const history = useHistory();
    function goToWinPage(e) {
        if(next === true) {
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
                    <p>The question is as follows: </p>
                    <p>10 + 25 = ?</p>
                    <input type="text" onChange={handleAnswerChange} placeholder="Your Answer"/>
                    <p id="skillTestError" className="errMsg">{answerError}</p>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToWinPage}><p>Submit<span>&#62;</span></p></button>
                </div>
            </div>
        </div>
    );
}

export default SkillTest