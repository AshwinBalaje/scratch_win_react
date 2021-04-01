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
        <section>
            <ScratchCard {...settings} onLoad={check()}>
                {msg}
            </ScratchCard>;
            {/* <ScratchOff>{secret}</ScratchOff>
            <img src={image}/> */}
        </section>
    );
}

export default Game