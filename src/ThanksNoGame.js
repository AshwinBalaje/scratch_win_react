import {useHistory} from 'react-router-dom';

import checkmark from './assets/images/checkmark.png';

function Thanks(props){
    const history = useHistory();
    function goToHome(e) {
        e.preventDefault();
        console.log('going to home page');
        history.push('/')
    }
    return (
        <div className="grid-container confirmContainer hideDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-5 small-10 small-offset-1 cell titleText confirmTitle">
                    <img src={checkmark} alt="checkmark" id="checkmark"/>
                    <h1>Thanks {props.fname}! <br/> Please come back later to play again.</h1>
                </div>

                <div className="large-5 large-offset-1 small-10 small-offset-1 cell confirmBox">
                    <h2>Confirmation</h2>
                    <p>Thanks for registration. Unfortunately 72 hours has not passed since your last play. Please try again later.</p>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToHome}><p>Home<span>&#62;</span></p></button>
                </div>

            </div>
        </div>
    )
}
export default Thanks;