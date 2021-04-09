import {useHistory} from 'react-router-dom';

import HomeImage from "./assets/images/homeimage.png";

import News3 from "./assets/images/FreshKicks.png";

import News2 from "./assets/images/burger.png";

import News1 from "./assets/images/Taco.png";


function Home(){
    const history = useHistory();
    function goToForm(e) {
        e.preventDefault();
        console.log('going to form page');
        history.push('/form')
    }
    return (
        <div className="grid-container homeContainer hideDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-12 small-12 cell homeBox">
                    <img src={HomeImage} alt="this is a home" id="homeImage"></img><br></br>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToForm}><p>Start  <span>&#62;</span></p></button>
                </div>

                <div className="large-12 small-12 cell homeBox">
                    <h2>Welcome to Buy More Dollars, the Greatest Online Scratch and Win Game in Canada</h2>
                    <p>Here’s something for everyone to enjoy when playing Scratch game online! We offer more than any online Game in Canada, with secure banking that allows you to play with peace of mind.
                        Every time you Win, the value of the jackpot increases, with potential winnings reaching up to 10000 BuyMore Dollars. All gaming, deposits, and withdrawals can be enjoyed with ease thanks to 
                        the safe and secure latest SSL encryption technology. You’ll never run out of amazing games to play and getting started is super simple at Buy More Dollars.</p>
                </div>

                <div className=" large-12 small-12 cell homeBox">
                        <h2 className="news">News</h2>
                        <div className="grid-x grid-margin-x grid-padding-x">
                                <div className="cell large-4">
                                    <img src={News1} alt="Interior view of Taco Superstore"></img>
                                    <h4>Taco Superstore won best restaurant of 2020 in Toronto!</h4>
                                </div>
                                <div className="cell large-4">
                                    <img src={News2} alt="Tray of burger and fries with card reader for payment"></img>
                                    <h4>Glorbotronic Burgers has opened a new location in Oshawa!</h4>
                                </div>
                                <div className="cell large-4">
                                    <img src={News3} alt="Front view of Kickomatic Store"></img>
                                    <h4>Fresh Kicks-o-matic Dispenso Booths is now open later on Sundays!</h4>
                                </div>
                        </div>           
                </div>

            </div>
        </div>
    )
}
export default Home;