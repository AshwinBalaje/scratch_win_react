import WinImage from './assets/images/WinImage.jpg';
import {useHistory} from 'react-router-dom';

function LossPage(props){
    const history = useHistory();
    function goToHome(e) {
        e.preventDefault();
        console.log('going to game page');
        history.push('/')
    }
    return (
        <div className="grid-container gameContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-10 large-offset-1 small-10 small-offset-1 cell titleText gameTitle">
                    <h1 id="">Sorry!</h1>
                    <p>Unfortunately you have not won a prize! <br/><br/> In consolation, you recieve a $2.00 coupon off of any purchase over $50 from Raw-Cabbage-On-A-Stick Hut! This coupon will be sent to your email.</p>
                    <button type="submit" id="formSubmitBtn" className="btns submitBtn" onClick={goToHome}><p>Home<span>&#62;</span></p></button>
                </div>

            

            </div>
        </div>
    )
}
export default LossPage;