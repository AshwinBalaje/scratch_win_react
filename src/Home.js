import {useHistory} from 'react-router-dom';

import HomeImage from "./assets/images/homeimage.png";


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

                
                <div className="large-10 large-offset-1 small-10 small-offset-1 cell homeBox">
                    <img src={HomeImage} id="homeImage"></img><br></br>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToForm}><p>Start<span>&#62;</span></p></button>
                </div>

                <div className="large-10 large-offset-1 small-10 small-offset-1 cell homeBox">
                    <h2>News</h2>
                    <p>Taco Superstore won best restaurant of 2020 in Toronto!</p>
                    <p>Glorbotronic Burgers has opened a new location in Oshawa!</p>
                    <p>Fresh Kicks-o-matic Dispenso Booths is now open later on Sundays!</p>
                    <p>Raw-Cabbage-On-A-Stick is now serving Cooked Cabbage on a Stick!</p>
                </div>

            </div>
        </div>
    )
}
export default Home;