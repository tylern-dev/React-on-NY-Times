import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import MainLayout from './layouts/MainLayout';

class App extends Component{
    
    render(){
        return(
            <div className="container">
                
                    <Route path="/" component={MainLayout} />

            </div>
        )
    }
}

export default App;
