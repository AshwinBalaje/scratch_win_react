import React, {useState} from 'react';
import './App.css';
import './lib/foundation.css';

import Logo from './assets/images/logo.png';

import Form from './Form';
import Legal from './Legal';
import Thanks from './Thanks';
import Game from './Game';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [userDOB, setDOB] = useState('');

  const [fnameError, setFNameError] = useState('');
  const [lnameError, setLNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [provinceError, setProvinceError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [userDOBError, setDOBError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');

  //let isComplete = {fname: false, lname: false, email: false, phone: false, address: false, city: false, province: false, postalCode: false, userDOB: false};
  //const [errCheckFName, setErrCheckFName] = useState(false);
  const [isFNameError, setIsFNameError] = useState(true);
  const [isLNameError, setIsLNameError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPhoneError, setIsPhoneError] = useState(true);
  const [isAddressError, setIsAddressError] = useState(true);
  const [isCityError, setIsCityError] = useState(true);
  const [isProvinceError, setIsProvinceError] = useState(true);
  const [isPostalCodeError, setIsPostalCodeError] = useState(true);
  const [isDOBError, setIsDOBError] = useState(true);
  const [isCheckboxError, setIsCheckboxError] = useState(true);
  
  
  const handleFirstNameChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;
    
    if(pattern.test(e.target.value)){
      setFName(e.target.value);
      setFNameError("");
      setIsFNameError(false);
    } else {
      setFNameError("* Please enter a valid first name.");
      setIsFNameError(true);
    }
    console.log(e);
  }

  const handleLastNameChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;
    
    if(pattern.test(e.target.value)){
      setLName(e.target.value);
      setLNameError("");
      setIsLNameError(false);
    } else {
      setLNameError("* Please enter a valid last name.");
      setIsLNameError(true);
    }
    console.log(e);
  }

  const handleEmailChange = (e) => {
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(pattern.test(e.target.value)){
      setEmail(e.target.value);
      setEmailError("");
      setIsEmailError(false);
    } else {
      setEmailError("* Please enter a valid email.");
      setIsEmailError(true);
    }
    console.log(e);
  }

  const handlePhoneChange = (e) => {
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    
    if(pattern.test(e.target.value)){
      setPhone(e.target.value);
      setPhoneError("");
      setIsPhoneError(false);
    } else {
      setPhoneError("* Please enter a valid phone number.");
      setIsPhoneError(true);
    }
    console.log(e);
  }

  const handleAddressChange = (e) => {
    let pattern = /^(?:[Pp][Oo]\s[Bb][Oo][Xx]|[0-9]+)\s(?:[0-9A-Za-z\.'#]|[^\S\r\n])+/;
    
    if(pattern.test(e.target.value)){
      setAddress(e.target.value);
      setAddressError("");
      setIsAddressError(false);
    } else {
      setAddressError("* Please enter a valid address line.");
      setIsAddressError(true);
    }
    console.log(e);
  }

  const handleCityChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;

    if(pattern.test(e.target.value)){
      setCity(e.target.value);
      setCityError("");
      setIsCityError(false);
    }else {
      setCityError("* Please enter a valid city.");
      setIsCityError(true);
    }
    console.log(e);
  }

  const handleProvinceChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;

    if(pattern.test(e.target.value)){
      setProvince(e.target.value);
      setProvinceError("");
      setIsProvinceError(false);
    } else {
      setProvinceError("* Please select a province.");
      setIsProvinceError(true);
    }
    console.log(e);
  }

  const handlePostalCodeChange = (e) => {
    let pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if(pattern.test(e.target.value)){
      setPostalCode(e.target.value);
      setPostalCodeError("");
      setIsPostalCodeError(false);
    } else {
      setPostalCodeError("* Please enter a valid postal code.");
      setIsPostalCodeError(true);
    }
    console.log(e);
  }

  const handleDOBChange = (e) => {
    let pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    if(pattern.test(e.target.value)){
      setDOB(e.target.value);
      setDOBError("");
      setIsDOBError(false);
    } else {
      setDOBError("* Please select a valid date of birth.");
      setIsDOBError(true);
    }
    console.log(e);
  }

  const handleCheckboxChange = (e) => {
    
    if(e.target.checked==true){
      setCheckboxError("");
      setIsCheckboxError(false);
    } else {
      setCheckboxError("* Please accept terms to continue.");
      setIsCheckboxError(true);
    }

      
  }

  return (
    <Router>
      <div className="App">

      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="large-2 cell">
            <Link to="/"><img id="logo" src={Logo} alt="Buy More Dollars"/></Link>
          </div>
        </div>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/thanks">thanks</Link>
              <Link to="/legal">legal</Link>
            </li>
          </ul>
        </nav>
        {/* <h1>{{fname}} | {lname} | {address} | {city} | {phone} | {province} | {email}</h1> */}
        <Switch>
          <Route exact path="/" children={<Form handleFirstNameChange={(e) => handleFirstNameChange(e)}
                                                handleLastNameChange={(e) => handleLastNameChange(e)}
                                                handleEmailChange={(e) => handleEmailChange(e)}
                                                handlePhoneChange={(e) => handlePhoneChange(e)}
                                                handleAddressChange={(e) => handleAddressChange(e)}
                                                handleCityChange={(e) => handleCityChange(e)}
                                                handleProvinceChange={(e) => handleProvinceChange(e)}
                                                handlePostalCodeChange={(e) => handlePostalCodeChange(e)}
                                                handleDOBChange={(e) => handleDOBChange(e)}
                                                handleCheckboxChange={(e) => handleCheckboxChange(e)}
                                                
                                                fnameError={fnameError}
                                                lnameError={lnameError}
                                                emailError={emailError}
                                                phoneError={phoneError}
                                                addressError={addressError}
                                                cityError={cityError}
                                                provinceError={provinceError}
                                                postalCodeError={postalCodeError}
                                                userDOBError={userDOBError}
                                                checkboxError={checkboxError}
                                                
                                                isFNameError={isFNameError}
                                                isLNameError={isLNameError}
                                                isEmailError={isEmailError}
                                                isPhoneError={isPhoneError}
                                                isAddressError={isAddressError}
                                                isCityError={isCityError}
                                                isProvinceError={isProvinceError}
                                                isPostalCodeError={isPostalCodeError}
                                                isDOBError={isDOBError}
                                                isCheckboxError={isCheckboxError}
                                                >
                                                </Form>}>
          </Route>
          <Route path="/thanks" children={<Thanks fname={fname} lname={lname} email={email} phone={phone} address={address} city={city} province={province} postalCode={postalCode} userDOB={userDOB} ></Thanks>}></Route>
          <Route path="/game" component={Game}></Route>
          <Route path="/legal" component={Legal}></Route>            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
