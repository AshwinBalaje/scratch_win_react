import React, {useState} from 'react';
import './App.css';
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
  // const [postal, setPostal] = useState('');
  const handleFirstNameChange = (e) => {
    setFName(e.target.value);
    console.log(e);
  }
  const handleLastNameChange = (e) => {
    setLName(e.target.value);
    console.log(e);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    console.log(e);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    console.log(e);
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(e);
  }

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    console.log(e);
  }
  return (
    <Router>
      <div className="App">
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
                                                handleAddressChange={(e) => handleAddressChange(e)}
                                                handleCityChange={(e) => handleCityChange(e)}
                                                handleProvinceChange={(e) => handleProvinceChange(e)}
                                                handlePhoneChange={(e) => handlePhoneChange(e)}
                                                handleEmailChange={(e) => handleEmailChange(e)}
                                          ></Form>}>
          </Route>
          <Route path="/thanks" children={<Thanks lname={lname} fname={fname} address={address} city={city} province={province} email={email} phone={phone}></Thanks>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
