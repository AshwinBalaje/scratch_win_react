import React, {useState} from 'react';
import {withRouter, Link} from 'react-router-dom';

function Form(props) {
    const [formError, setFormError] = useState('');

    function goToThanks(e) {
        if(props.isFNameError === true || props.isLNameError === true || props.isEmailError === true || props.isPhoneError === true || props.isAddressError === true || props.isCityError === true || props.isProvinceError === true || props.isPostalCodeError === true || props.isDOBError === true || props.isCheckboxError === true){
            e.preventDefault();
            setFormError("* Please complete all required fields.");
        } else {
            

            const expiryTime = JSON.parse(localStorage.getItem('expiryTime'));
            const now = new Date();

            //if nothing is in local storage
            if(expiryTime === null){ 
                e.preventDefault();
                console.log(props);
                setFormError("");
                isUserWinning(props);
                props.history.push('/thanks');
            
            //if not expired yet
            } else if (expiryTime > now.getTime()) {
                console.log('not eligible for scratchcard');
                e.preventDefault();
                console.log(props);
                setFormError("");
                props.history.push('/thanksNoGame');
        
            //if it expires
            } else if (expiryTime < now.getTime()) {
                localStorage.removeItem('expiryTime');
                console.log('delete expiryTime');

                e.preventDefault();
                console.log(props);
                setFormError("");
                isUserWinning(props);
                props.history.push('/thanks');
            }
        }
    }

    function isUserWinning(props) {
        console.log('called is winning function');
        let winNum = Math.floor(Math.random() * 100) + 1;
        // let winNum = 10;
        let winningChance = winNum/100;
        if(winningChance> 0 && winningChance<0.25) {
            console.log('if winning is between 0 to 0.25');
            props.handleGameMsg('Sorry, please play again.');
        }
        else if(winningChance>0.25 && winningChance<0.5) {
            console.log('if winning is between 0.25 to 0.5');
            props.handleGameMsg('Congratulations! You have won 20 BuyMore Dollars!');
        }
        else if(winningChance>0.5 && winningChance<0.75) {
            console.log('if winning is between 0.5 to 0.75');
            props.handleGameMsg('Congratulations! You have won 100 BuyMore Dollars!');
        }
        else if(winningChance>0.75 && winningChance<0.9) {
            console.log('if winning is between 0.75 to 0.9');
            props.handleGameMsg('Congratulations! You have won 750 BuyMore Dollars!');
        }
        else {
            console.log('if winning is between 0.0 to 1');
            props.handleGameMsg('Congratulations! You have won 10000 BuyMore Dollars!');
        }

        //write new expiry time to local storage
        const now = new Date();
        const timeToExpire = 259200000; //60000 is 1 min, 259 200 000 is 72 hours
        localStorage.setItem('expiryTime', JSON.stringify(now.getTime() + timeToExpire));
        console.log('set new expiry time');
    }

    return (
        <div className="grid-container formContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-5 small-10 small-offset-1 cell titleText">
                    <h1 id="formTitle">Lets Get Started</h1>
                    <p>Please fill out the form to enter the contest.</p>
                    <p>Winners of the contest must answer a skill testing question.</p>
                    <p>Winners will be determined by random draw, but may have their entries removed for any reason by the leadership team of BuyMore Dollars Inc.</p>

                    <p>Prizes</p>
                    <ul id="formPrizes">
                        <li>1 Prize of 10 000 BuyMore Dollars</li>
                        <li>5 Prizes of 750 BuyMore Dollars</li>
                        <li>10 Prizes of 100 BuyMore Dollars</li>
                        <li>100 Prizes of 20 BuyMore Dollars</li>
                    </ul>
                </div>

                <div className="large-5 large-offset-1 small-10 small-offset-1 cell formBox">
                    <h2>Form</h2>
                    <form onSubmit={goToThanks}>
                        <div className="fieldContainer">
                            <label className="labelName">First Name</label>
                            <input className="inputField" id="fName" type="text" onChange={props.handleFirstNameChange}/>
                            <p id="firstNameError" className="errMsg">{props.fnameError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Last Name</label>
                            <input className="inputField" id="lName" type="text" onChange={props.handleLastNameChange}/>
                            <p id="lastNameError" className="errMsg"> {props.lnameError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Email</label>
                            <input className="inputField" id="email" type="text" onChange={props.handleEmailChange}/>
                            <p id="emailAddressError" className="errMsg">{props.emailError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Phone</label>
                            <input className="inputField" id="phone" type="text" onChange={props.handlePhoneChange}/>
                            <p id="phoneNumberError" className="errMsg">{props.phoneError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Address Line</label>
                            <input className="inputField" id="address" type="text" onChange={props.handleAddressChange}/>
                            <p id="addressError" className="errMsg">{props.addressError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">City</label>
                            <input className="inputField" id="city" type="text" onChange={props.handleCityChange}/>
                            <p id="cityError" className="errMsg">{props.cityError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Province/Territory</label>
                            <select list="province" id="province" onChange={props.handleProvinceChange}>
                                <option value=""> </option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="YT">Yukon</option>
                            </select>
                            <p id="provinceError" className="errMsg">{props.provinceError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Postal Code</label>
                            <input className="inputField" id="postalCode" type="text" onChange={props.handlePostalCodeChange}/>
                            <p id="postalCodeError" className="errMsg">{props.postalCodeError}</p>
                        </div>
                        <div className="fieldContainer">
                            <label className="labelName">Date of Birth</label>
                            <input className="inputField" id="userDob" type="date" onChange={props.handleDOBChange}/>
                            <p id="userDobError" className="errMsg">{props.userDOBError}</p>
                        </div>

                        <div className="fieldContainer">
                            <input type="checkbox" id="termsCheckbox" onChange={props.handleCheckboxChange}/>
                            <label className="labelName">I consent to the <Link to="/legal">Terms and Conditions & Privacy Policy</Link>.</label><br/>
                            <p id="termsCheckboxError" className="errMsg">{props.checkboxError}</p>
                        </div>

                        <div className="fieldContainer2">
                            <input type="checkbox" id="marketingCheckbox"/>
                            <label className="labelName">I consent to communications regarding BuyMore Dollar products and sponsors. </label><br/>
                        </div>
                        
                        <button type="submit" id="formSubmitBtn" className="submitBtn"><p>Submit<span>&#62;</span></p></button>
                        <p id="formError" className="errMsg">{formError}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Form);