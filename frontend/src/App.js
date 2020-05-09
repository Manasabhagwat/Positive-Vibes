import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Navbar from "./components/layout/Navbar";

// Import pages
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";

function App() {

  const router = (
            <Router>
                <Navbar/>

                <div className="container mt-5">
                    <Switch>
                        <Route path="/posts">
                            <PostsPage/>
                        </Route>
                        <Route path="/">
                          <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
  );

  return (router);
}

export default App;
