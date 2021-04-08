import wining from './assets/images/WinImage.jpg';
import {useHistory} from 'react-router-dom';


function WinPage(props){
    const history = useHistory();
    function goToSkillTest(e) {
        e.preventDefault();
        console.log('going to skill test page');
        history.push('/skilltest')
    }
    return (
        <div className="grid-container gameContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-4 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Congratulations!</h1>
                    <p>You have won a prize! Please proceed to the next page to answer a skill testing question!</p>
                    <button type="submit" id="formSubmitBtn" className="btns submitBtn" onClick={goToSkillTest}><p>Next<span>&#62;</span></p></button>
                </div>

                <div className="large-6 large-offset-1 small-10 small-offset-1 cell gameBox winBox">
                    <h2>Lucky Scratch</h2>
                    <img src={wining} alt="This is a win"></img>
                    {/* <ScratchOff>{secret}</ScratchOff>
                    <img src={image}/> */}
                </div>

            </div>
        </div>
    )
}
export default WinPage;