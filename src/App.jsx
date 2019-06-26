import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
//import 'bootstrap';
import asyncComponent from './hoc/asyncComponent';

const AsyncMain = asyncComponent(() => {
    return import('./containers/main.js');
});

const AsyncExp = asyncComponent(() => {
    return import('./containers/experience.js');
});

const AsyncAbout = asyncComponent(() => {
    return import('./containers/about.js');
});

//let bgColor = {"Header":"E9ECEF"}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div>
                    <Link to="/">Main</Link> | <Link to="/experience">Experience</Link> | <Link to="/about">About</Link>
                </div>
                <div>
                    <Route exact path="/" component={AsyncMain} />
                    <Route path="/experience" component={AsyncExp} />
                    <Route path="/about" component={AsyncAbout} />
                </div>
            </div>
        )
    }
}

export default App;