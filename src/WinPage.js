import wining from './assets/images/WinImage.jpg';
import {useHistory} from 'react-router-dom';


function WinPage(props){
    const history = useHistory();
    function goToHome(e) {
        e.preventDefault();
        console.log('going to home');
        history.push('/')
    }
    return (
        <div className="grid-container gameContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Congratulations!</h1>
                    <p>You have successfully answered the skill testing question and won the prize! The prize will be added to the account associated with your name in 6-8 weeks!</p>
                    <button type="submit" id="formSubmitBtn" className="btns submitBtn" onClick={goToHome}><p>Home<span>&#62;</span></p></button>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell gameBox winBox">
                    <h2>Lucky Scratch</h2>
                    <h3>{props.gameMsg}</h3>
                    <img src={wining} alt="This is a win"></img>
                    {/* <ScratchOff>{secret}</ScratchOff>
                    <img src={image}/> */}
                </div>

            </div>
        </div>
    )
}
export default WinPage;