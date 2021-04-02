import React, {useState} from 'react';

function SkillTest() {
    let [answer, setAnswer] = useState();
    let [next, setNext] = useState(false);

    const correctAnswer = (e) => {
        let ans = (10 + 25) *10;
        console.log(ans);
        setAnswer(e.target.value);
        if(ans === answer) {
            setNext(true);
        }
        else {
            setNext(false);
        }
    }

    return (
        <div className="grid-container skillTest showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Skill Test</h1>
                    <p>Correctly answer the quesions given to receive that you have won.</p>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell gameBox">
                    <h2>Question</h2>
                    <p>The question is as follows: </p>
                    <p>(10 + 25) * 10 ?</p>
                    <input type="text" onChange={correctAnswer} value={answer} placeholder="Your Answer"/>
                    <p id="skillTestError" className="errMsg" >Please enter correct answer</p>
                    <button className="submitBtn" disabled={next}>Continue<span>&#62;</span></button>
                </div>
            </div>
        </div>
    );
}

export default SkillTest