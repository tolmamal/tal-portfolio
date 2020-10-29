import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Home from './components';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

import './App.css';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
