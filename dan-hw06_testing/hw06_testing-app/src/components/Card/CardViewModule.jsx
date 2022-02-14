import React from "react";
import ButtonCard from "./ButtonCard";
import './cardViewModule.scss';
import ImageStar from './ImageStar';

function CardViewModule(props) {
    const { id, title, price, url, itemNumber } = props.item;

    return (
        <>
            <img src={url} alt={itemNumber} height="150" width="150" />
            <div className="card-description">
                <h3 className="title-card">{title}</h3>
                <div className="star-wrap">
                    <p className="item-number-card">{itemNumber}</p>
                    <div className="star-wrap">
                        <ImageStar id={id} />
                    </div>
                </div>
                <span className="price-card">${price}</span>
            </div>
            <ButtonCard className={'products'} id={id} title={title} />
        </>
    )
}

export default CardViewModule;