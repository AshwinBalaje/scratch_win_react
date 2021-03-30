import React from 'react';
import ScratchCard from 'react-scratchcard';
import image from './tokyoghoul.jpg';
// import ScratchOff from './ScratchOff';
// import image from './tokyoghoul.jpg'

function Game() {

    // const secret = Math.random().toString(16).slice(2, 7).toUpperCase();
    let msg;

    let i = Math.floor(Math.random() * 100) + 1;

    function check(i, msg) {
        console.log(i);
        if(i%2 == 0) {
            msg = 'Better Luck Next Time. But you get $2.00 as a complimentory gift';
            console.log(msg);
        }
        else if(i%5 == 0) {
            msg = 'Congratulations You have won 20 points of BuyMore Dollars';
            console.log(msg);
        }
        else if(i%3 == 0) {
            msg = 'Congratulations You have won 100 points of BuyMore Dollars';
            console.log(msg);
        }
        else if(i%4 == 0) {
            msg = 'Congratulations You have won 750 points of BuyMore Dollars';
            console.log(msg);
        }
        else if(i%7 == 0) {
            msg = 'Congratulations You have won 10,000 points of BuyMore Dollars';
            console.log(msg);
        }
        else {
            msg = 'This is default';
            console.log(msg);
        }
    }

    const settings = {
        width: 640,
        height: 480,
        image: image,
        finishPercent: 50,
        onComplete: check(i,msg)
    };

    return (
        <section>
            <ScratchCard {...settings}>
                {msg}
            </ScratchCard>;
            {/* <ScratchOff>{secret}</ScratchOff>
            <img src={image}/> */}
        </section>
    );
}

export default Game