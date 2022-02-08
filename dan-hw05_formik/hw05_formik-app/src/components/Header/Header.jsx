import React from "react";
import './header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

function Header() {
    const favoritesList = useSelector(state => state.favoritesList);
    const cartList = useSelector(state => state.cartList);
    const favoritesCount = favoritesList.length;
    const cartCount = cartList.length;


    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo-wrap">
                        <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to='/products'>
                            <img className="logo-header" src="./milwaukee-logo-1.svg" alt="logo" width='130' />
                        </NavLink>
                    </div>
                    <div className="link-icon-wrap">
                        <div className="header-favorite-wrap">
                            <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to="favorites">
                                <img src="./img/header-favorite.svg" alt="favorite star" />
                            </NavLink>
                            <span className="header-favorite--count">{
                                favoritesCount ? favoritesCount : null}</span>
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

export default Header;