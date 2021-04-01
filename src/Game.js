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
                this is temp
            </ScratchCard>;
            {/* <ScratchOff>{secret}</ScratchOff>
            <img src={image}/> */}
        </section>
    );
}

export default Game