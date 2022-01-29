import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import getNameBtnCart from './../../api/getNameBtnCart';
import { Link } from "react-router-dom";

function Card(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { id, title, price, url, itemNumber } = props.itemsList;
    const { onClickAddCart } = props;
    const { changeFavorite, cartList, favoriteList } = props.appProps;

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        if (favoriteList.includes(id)) {
            setIsFavorite(true);
        }
    }, []);

    let classFavoriteItem;
    if (isFavorite) {
        classFavoriteItem = "favorite-card active";
    } else {
        classFavoriteItem = "favorite-card";
    };

    const getBtnCard = () => {
        if (cartList.includes(id)) {
            return (<Link className="products-btn-cart btnView" to='/cart'>{getNameBtnCart(cartList, id)}</Link>);
        } else {
            return (<button onClick={() => onClickAddCart(id, title)} className="products-btn-cart">{getNameBtnCart(cartList, id)}</button>)
        }
    }

    return (
        <>
            <img src={url} alt={itemNumber} height="150" width="150" />
            <div className="card-description">
                <h3 className="title-card">{title}</h3>
                <div className="star-wrap">
                    <p className="item-number-card">{itemNumber}</p>
                    <div className="star-wrap">
                        <svg
                            onClick={e => { handleFavoriteClick(); changeFavorite(id) }}
                            className={classFavoriteItem}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20"
                            fill="#f6f6f6"
                            stroke="#666" strokeWidth="1"
                            viewBox="0 0 30 30">
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                    </div>
                </div>
                <span className="price-card">${price}</span>
            </div>
            {getBtnCard()}
        </>
    )
}

Card.propTypes = {
    itemsList: PropTypes.object,
    appProps: PropTypes.object,
    onClickAddCart: PropTypes.func
}
export default Card;