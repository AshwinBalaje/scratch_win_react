
function Home(props){
    
    return (
        <div className="grid-container homeContainer hideDiv">
            <div className="grid-x grid-padding-x">

                
                <div className="large-10 large-offset-1 small-10 small-offset-1 cell homeBox">
                    <h2>Home</h2>
                    <p>Let's play and win some prizes.</p>
                    <button id="confirmationBtn" className="submitBtn" ><p>Continue<span>&#62;</span></p></button>
                </div>

                <div className="large-10 large-offset-1 small-10 small-offset-1 cell homeBox">
                    <h2>News</h2>
                    <p>Thanks for registration. Let's play and win some prizes.</p>
                    <button id="confirmationBtn" className="submitBtn" ><p>Continue<span>&#62;</span></p></button>
                </div>

            </div>
        </div>
    )
}
export default Home;