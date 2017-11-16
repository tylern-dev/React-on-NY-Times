import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Articles from '../pages/Articles';

import Nav from '../components/Nav';
import SearchPage from '../pages/SearchPage';
import Saved from '../pages/Saved';
import TopStories from '../pages/TopStories';
import Home from '../pages/Home';

export default class MainLayout extends Component {
    render(){
        return(
            <div>
            <Nav />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/saved-stories" component={Saved} />
                    <Route path="/top-stories" component={TopStories} />  
                </Switch>
            </main>
            </div>
        )
    }
}