import React, {useState, useEffect} from 'react';
import ScratchCard from 'react-scratchcard';
import image from './tokyoghoul.jpg';
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
        // }
    }

    const settings = {
        width: 640,
        height: 480,
        image: image,
        finishPercent: 50,
    };

    return (
        <div className="grid-container gameContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText">
                    <h1 id="formTitle">Let's Win Some Prizes!</h1>
                    <p>Rules</p>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell formBox">
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