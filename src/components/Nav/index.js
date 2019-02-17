import React from 'react';
import Styled from 'styled-components'

const Nav = props => {
    return (
        <NavDiv>
            <NavBrand>React(ion) Movies</NavBrand>
            <NavLink href="/">Search</NavLink>
            <NavLink href="/saved">Saved</NavLink>
        </NavDiv>
    )
}

export default Nav;

const NavDiv = Styled.nav`
    min-width: 100%
    position: sticky;
    top: 0;
    box-shadow: 5px 5px 5px #000;
    padding: 30px 0px;
    margin: 1rem;
`

const NavBrand = Styled.span`
    font-size: 1.75rem;
    padding-right: 1rem;
`

const NavLink = Styled.a`
    margin: 15px;
`