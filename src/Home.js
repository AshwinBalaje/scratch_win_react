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
                    <button id="confirmationBtn" className="submitBtn" onClick={goToForm}><p>Start<span>&#62;</span></p></button>
                </div>

                <div className="homeBox ">
                        <h2 className="news">News</h2>
                    <div className="grid-x grid-margin-x grid-padding-x">
                            <div className="cell large-4">
                                <img src={News1} alt="Interior view of Taco Superstore"></img>
                                <p>Taco Superstore won best restaurant of 2020 in Toronto!</p>
                            </div>
                            <div className="cell large-4">
                                <img src={News2} alt="Tray of burger and fries with card reader for payment"></img>
                                <p>Glorbotronic Burgers has opened a new location in Oshawa!</p>
                            </div>
                            <div className="cell large-4">
                                <img src={News3} alt="Front view of Kickomatic Store"></img>
                                <p>Fresh Kicks-o-matic Dispenso Booths is now open later on Sundays!</p>
                            </div>
                    </div>           
                </div>

            </div>
        </div>
    )
}
export default Home;