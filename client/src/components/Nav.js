import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const Nav = (props) =>(
       
        <StyledNav className="navbar">
            <div className="nav-wrapper">
                <Link to="/" className="navbar-brand mc-auto">NYT Articles</Link>
                <div className="nav nav-pills" id="nav-mobile">
                    <NavLink to="/top-stories" activeClassName="active" className="nav-link nav-item ">Top Stories</NavLink> 
                    <NavLink to="/search" activeClassName="active" className="nav-link nav-item">Search</NavLink> 
                    <NavLink to="/saved-stories" activeClassName="active" className="nav-link nav-item">Saved</NavLink> 
                </div>
            </div>
        </StyledNav>
        
    )


export default Nav;

const StyledNav = styled.nav`
    margin-bottom: 20px;
`;