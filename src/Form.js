import React from 'react';
import {withRouter} from 'react-router-dom';

function Form(props) {
    function goToThanks(e) {
        e.preventDefault();
        console.log(props);
        console.log("will we go anywhere?");
        props.history.push('/thanks');
    }
    return (
        <form onSubmit={goToThanks}>
            <div className="fieldContainer">
                <label className="labelName">First Name</label>
                <input className="inputField" id="fName" type="text" onChange={props.handleFirstNameChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName">Last Name</label>
                <input className="inputField" id="lName" type="text" onChange={props.handleLastNameChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName">Email</label>
                <input className="inputField" id="email" type="text" onChange={props.handleEmailChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName">Address</label>
                <input className="inputField" id="address" type="text" onChange={props.handleAddressChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName"> City</label>
                <input className="inputField" id="city" type="text" onChange={props.handleCityChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName">Province</label>
                <input className="inputField" id="province" type="text" onChange={props.handleProvinceChange}/>
            </div>
            <div className="fieldContainer">
                <label className="labelName" >Phone</label>
                <input className="inputField" id="phone" type="text" onChange={props.handlePhoneChange}/>
            </div>
            <button className="btns" id="submit">Submit</button>
        </form>
    );
}

export default withRouter(Form);