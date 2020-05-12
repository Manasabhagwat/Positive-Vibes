import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.js";

// Import pages
import HomePage from './components/home/HomePage';
import OtherInformation from "./components/home/OtherInformation";
import ContactUs from "./components/home/ContactUs";

function App() {

  const router = (
            <Router>
                <Navbar fixed="top"/>
               

                <div className="container mt-5" id="side_margin" >
                    <Switch>
                        
                        <Route exact path="/">
                          <HomePage/>
                        </Route>

                        <Route path="/otherInformation">
                            <OtherInformation/>
                        </Route>
                        
                        <Route path="/contactUs">
                            <ContactUs/>
                        </Route>
                    </Switch>
                </div>
             < Footer fixed="bottom"/>

            </Router>
  );

  return (router);
}

export default App;
