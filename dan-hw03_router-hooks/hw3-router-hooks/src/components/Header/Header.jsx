import React from "react";
import './header.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ favoriteCount, cartCount }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo-wrap">
                        <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to='/products'>
                            <img className="logo-header" src="milwaukee-logo-1.svg" alt="logo" width='130' />
                        </NavLink>
                    </div>
                    <div className="link-icon-wrap">
                        <div className="header-favorite-wrap">
                            <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to="favorites">
                                <img src="./img/header-favorite.svg" alt="favorite star" />
                            </NavLink>
                            <span className="header-favorite--count">{
                                favoriteCount ? favoriteCount : null}</span>
                        </div>

                        <div className="header-cart-wrap">
                            <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to="cart">
                                <img src="./img/header-cart.svg" alt="cart" />
                            </NavLink>
                            <span className="header-cart--count">{
                                cartCount ? cartCount : null}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    favoriteCount: PropTypes.number,
    cartCount: PropTypes.number
}

Header.defaultProps = {
    favoriteCount: null,
    cartCount: null
}

export default Header;