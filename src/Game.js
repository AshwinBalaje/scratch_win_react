import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import ScratchCard from 'react-scratchcard';
import image from './assets/images/scratch.png';
// import ScratchOff from './ScratchOff';
// import image from './tokyoghoul.jpg'

function Game(props) {
    const settings = {
        width: 500,
        height: 483,
        image: image,
        finishPercent: 80,
        onComplete: () => console.log('The card is now clear!')
    };
    const history = useHistory();
    function goToWinLoss(e) {
        e.preventDefault();
        console.log('going to game page');
        if(props.gameMsg === "Sorry, please play again."){
            history.push('/LossPage')
        } else {
            history.push('/WinPage')
        }
        
    }
    return (
        <div className="grid-container gameContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Let's Win Some Prizes!</h1>
                    <p>Rules</p>
                    <ul>
                        <li>Scratch the card to win amazing prizes.</li>
                        <li>If you have won a prize, you will be redirected to a skill testing page. If answered correctly, your prize will be added to your account.</li>
                        <li>You will be awarded the prize you won in 6 to 8 weeks.</li>
                        <li>You can only play the game again once every 72 hours.</li>
                        <li>For further details, please refer to our <Link to="/legal">Terms and Conditions & Privacy Policy</Link></li>
                    </ul>

                    <p>Prizes</p>
                    <ul>
                        <li>1 Prize of 10 000 BuyMore Dollars</li>
                        <li>5 Prizes of 750 BuyMore Dollars</li>
                        <li>10 Prizes of 100 BuyMore Dollars</li>
                        <li>100 Prizes of 20 BuyMore Dollars</li>
                    </ul>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell gameBox">
                    <h2>Lucky Scratch</h2>
                    <ScratchCard {...settings}>
                        <div id="scratchcardDiv">
                            <h3 id="winningMessage">{props.gameMsg}</h3>
                            <button id="winlossBtn" className="submitBtn" onClick={goToWinLoss}><p>Continue<span>&#62;</span></p></button>
                        </div>
                    </ScratchCard>
                </div>
            </div>
        </div>
    );
}

export default Game