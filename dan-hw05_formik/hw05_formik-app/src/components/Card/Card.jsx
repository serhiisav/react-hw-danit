import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoritesList } from "../../store/thunk";
import ButtonCard from "./ButtonCard";

function Card(props) {
    const dispatch = useDispatch();

    const favoritesList = useSelector(state => state.favoritesList);
    const { id, title, price, url, itemNumber } = props.item;

    const handleFavoriteClick = (id) => {
        dispatch(changeFavoritesList(id));
    };

    return (
        <>
            <img src={url} alt={itemNumber} height="150" width="150" />
            <div className="card-description">
                <h3 className="title-card">{title}</h3>
                <div className="star-wrap">
                    <p className="item-number-card">{itemNumber}</p>
                    <div className="star-wrap">
                        <svg
                            onClick={e => handleFavoriteClick(id)}
                            className={
                                favoritesList.includes(id) ?
                                    "favorite-card active" :
                                    "favorite-card"
                            }
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
            <ButtonCard className={'products'} id={id} title={title} />
        </>
    )
}

export default Card;