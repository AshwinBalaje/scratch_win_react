import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ScratchCard from 'react-scratchcard';
import image from './assets/images/scratch.png';
// import ScratchOff from './ScratchOff';
// import image from './tokyoghoul.jpg'

function Game() {

    // const secret = Math.random().toString(16).slice(2, 7).toUpperCase();
    let [msg, setMsg] = useState('');
    // useEffect(() => setMsg('This is a test'), [msg]);

    const check = (e) => {
        let num = Math.floor(Math.random() * 100) + 1;
        let winningChance = (num/100);
        console.log(num);
        console.log(winningChance);

        // useEffect(() => setMsg('This is a test'), [msg]);
        // setMsg('This is test 2');
        // if(winningChance>0 && winningChance<25) {
        //     setMsg('Better Luck Next Time');
        // }
        // else if(winningChance>25 && winningChance<50) {
        //     setMsg('Congratulations! You have won 20 BuyMore Dollar Points.');
        // }
        // else if(winningChance>50 && winningChance<75) {
        //     setMsg('Congratulations! You have won 100 BuyMore Dollar Points.');
        // }
        // else if(winningChance>75 && winningChance<90) {
        //     setMsg('Congratulations! You have won 750 BuyMore Dollar Points.');
        // }
        // else {
        //     setMsg('Congratulations! You have won 10000 BuyMore Dollar Points.');
        // \}
    }

    const settings = {
        width: 500,
        height: 483,
        image: image,
        finishPercent: 100,
    };

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
                    <ScratchCard {...settings} onLoad={check()}>
                        {msg}
                    </ScratchCard>
                    {/* <ScratchOff>{secret}</ScratchOff>
                    <img src={image}/> */}
                </div>
            </div>
        </div>
    );
}

export default Game