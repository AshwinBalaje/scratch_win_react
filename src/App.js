import React, {useState} from 'react';
import './App.css';
import './lib/foundation.css';

import Logo from './assets/images/logo.png';

import Form from './Form';
import Thanks from './Thanks';
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

  const [error, setError] = useState('Please enter the correct value.');

  let errorCheck = {fname: false, lname: false, email: false, phone: false, address: false, city: false, province: false, postalCode: false, userDOB: false};
  
  
  const handleFirstNameChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;
    
    if(pattern.test(e.target.value)){
      errorCheck.fname = false;
      setFName(e.target.value);
      console.log(errorCheck.fname);
    } else {
      errorCheck.fname = true;
      this.setError("Please enter correct firstname.");
      console.log(errorCheck.fname);
    }
    console.log(e);
  }

  const handleLastNameChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;
    
    if(pattern.test(e.target.value)){
      errorCheck.lname = false;
      setLName(e.target.value);
    } else {
      errorCheck.lname = true;
      console.log(errorCheck.lname);
    }
    console.log(e);
  }

  const handleEmailChange = (e) => {
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(pattern.test(e.target.value)){
      errorCheck.email = false;
      setEmail(e.target.value);
    } else {
      errorCheck.email = true;
      console.log(errorCheck.email);
    }
    console.log(e);
  }

  const handlePhoneChange = (e) => {
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    
    if(pattern.test(e.target.value)){
      errorCheck.phone = false;
      setPhone(e.target.value);
    } else {
      errorCheck.phone = true;
      console.log(errorCheck.phone);
    }
    console.log(e);
  }

  const handleAddressChange = (e) => {
    let pattern = /^(?:[Pp][Oo]\s[Bb][Oo][Xx]|[0-9]+)\s(?:[0-9A-Za-z\.'#]|[^\S\r\n])+/;
    
    if(pattern.test(e.target.value)){
      errorCheck.address = false;
      setAddress(e.target.value);
    } else {
      errorCheck.address = true;
      console.log(errorCheck.address);
    }
    console.log(e);
  }

  const handleCityChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;

    if(pattern.test(e.target.value)){
      errorCheck.city = false;
      setCity(e.target.value);
    }else {
      errorCheck.city = true;
      console.log(errorCheck.city);
    }
    console.log(e);
  }

  const handleProvinceChange = (e) => {
    let pattern = /^[a-zA-Z]+$/;

    if(pattern.test(e.target.value)){
      errorCheck.province = false;
      setProvince(e.target.value);
    } else {
      errorCheck.province = true;
      console.log(errorCheck.province);
    }
    console.log(e);
  }

  const handlePostalCodeChange = (e) => {
    let pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if(pattern.test(e.target.value)){
      errorCheck.postalCode = false;
      setPostalCode(e.target.value);
    } else {
      errorCheck.postalCode = true;
      console.log(errorCheck.postalCode);
    }
    console.log(e);
  }

  const handleDOBChange = (e) => {
    let pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    if(pattern.test(e.target.value)){
      errorCheck.userDOB = false;
      setDOB(e.target.value);
    } else {
      errorCheck.userDOB = true;
    }
    console.log(e);
  }

  const handleTermsCheckboxChange = (e) => {
    setProvince(e.target.value);
    console.log(e);
  }

  return (
    <Router>
      <div className="App">

      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="large-2 cell">
            <img id="logo" src={Logo} alt="Buy More Dollars"/>
          </div>
        </div>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
                                                
                                          ></Form>}>
          </Route>
          <Route path="/thanks" children={<Thanks lname={lname} fname={fname} email={email} phone={phone} address={address} city={city} province={province} postalCode={postalCode} userDOB={userDOB} ></Thanks>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
