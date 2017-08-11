import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {FccSha} from './components/router';

class App extends Component {
    render() {
        return (
           <FccSha/>
        );
    }
}

export default App;
