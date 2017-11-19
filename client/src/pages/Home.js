import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TopStories from './TopStories'

const Home = () => (
    <div>
        <div className="jumbotron">
            <h1 className="display-3">NYT Article Database</h1>
            <p className="lead">Checkout the latest top stories or search for articles to save.</p>
            <hr className="my-4" />
            <p>Save the articles for future reading.</p>
            <p className="lead">
                <StyledNav to="/top-stories" className="btn btn-primary btn-lg">Top Stories</StyledNav>
                <StyledNav to="/search" className="btn btn-primary btn-lg">Search for Articles</StyledNav>
                <StyledNav to="/saved-stories" className="btn btn-primary btn-lg">View Saved</StyledNav>
            </p>
        </div>
        <TopStories pageTitle="Today's Featured Stories" limit={4} />
    </div>
)

export default Home;

const StyledNav = styled(NavLink)`
    margin-right: 10px;
`;