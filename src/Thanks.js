import {useHistory} from 'react-router-dom';

import checkmark from './assets/images/checkmark.png';

function Thanks(props){
    const history = useHistory();
    function goToGame(e) {
        e.preventDefault();
        console.log('going to game page');
        history.push('/game')
    }
    return (
        <div className="grid-container confirmContainer hideDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-5 small-10 small-offset-1 cell titleText confirmTitle">
                    <img src={checkmark} alt="checkmark" id="checkmark"/>
                    <h1>Thanks {props.fname}! <br/> You are all set.</h1>
                </div>

                <div className="large-5 large-offset-1 small-10 small-offset-1 cell confirmBox" id="thanksContainer">
                    <h2>Confirmation</h2>
                    <p>Thanks for registration. Let's play and win some prizes.</p>
                    <button id="confirmationBtn" className="submitBtn" onClick={goToGame}><p>Continue<span>&#62;</span></p></button>
                </div>

            </div>
        </div>
    )
}
export default Thanks;