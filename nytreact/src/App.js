import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './components/Nav';

class App extends Component{
    
    render(){
        return(
            
            <Nav />
        )
    }
}

export default App;
