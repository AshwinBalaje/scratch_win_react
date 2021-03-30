import {useHistory} from 'react-router-dom';

function Thanks(props){
    const history = useHistory();
    function goToGame(e) {
        e.preventDefault();
        console.log('going to game page');
        history.push('/game')
    }
    return (
        <section>
            <h2>Thanks so much {props.fname} {props.lname} {props.address} {props.city} {props.phone} {props.province} {props.email}!</h2>
            <p>You are awesome</p>
            <div>
                <button onClick={goToGame}>Start Game</button>
            </div>
        </section>
    )
}
export default Thanks;