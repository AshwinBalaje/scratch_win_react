import React, {useState} from 'react';
import {withRouter, Link} from 'react-router-dom';

function Form(props) {
    // document.querySelector("#submit").addEventListener('click', goToThanks);

    const [formError, setFormError] = useState('');

    function goToThanks(e) {
        
        if(props.isFNameError === true || props.isLNameError === true || props.isEmailError === true || props.isPhoneError === true || props.isAddressError === true || props.isCityError === true || props.isProvinceError === true || props.isPostalCodeError === true || props.isDOBError === true || props.isCheckboxError === true){
            e.preventDefault();
            setFormError("* Please complete all required fields.");
        } else {
            e.preventDefault();
            console.log(props);
            console.log("will we go anywhere?");
            setFormError("");
            props.history.push('/thanks');
        }
    }
    return (
        <div className="grid-container formContainer showDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-5 small-10 small-offset-1 cell titleText">
                    <h1 id="formTitle">Lets Get Started</h1>
                    <p>Please fill out the form to enter the contest.</p>
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
                            <label className="labelName">Province</label>
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

                        <div className="fieldContainer">
                            <input type="checkbox" id="marketingCheckbox"/>
                            <label className="labelName">I consent to communications regarding BuyMore Dollar products and sponsors. </label><br/>
                        </div>
                        
                        <button type="submit" id="formSubmitBtn" className="btns submitBtn"><p>Submit<span>&#62;</span></p></button>
                        <p id="formError" className="errMsg">{formError}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Form);