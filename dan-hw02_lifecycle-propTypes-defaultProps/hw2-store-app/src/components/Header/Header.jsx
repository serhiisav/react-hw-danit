import React, { Component } from "react";
import './header.scss';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        let { favoriteCount, cartCount } = this.props
        return (
            <header className="header">
                <div className="container">
                    <div className="header-wrap">
                        <div className="logo-wrap">
                            <img src="milwaukee-logo-1.svg" alt="logo" width='130' />
                        </div>
                        <div className="header-favorite-wrap">
                            <img src="./img/header-favorite.svg" alt="favorite star" />
                            <span className="header-favorite--count">{
                                favoriteCount ? favoriteCount : null}</span>
                        </div>
                        <div className="header-cart-wrap">
                            <img src="./img/header-cart.svg" alt="cart" />
                            <span className="header-cart--count">{
                                cartCount ? cartCount : null}</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
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