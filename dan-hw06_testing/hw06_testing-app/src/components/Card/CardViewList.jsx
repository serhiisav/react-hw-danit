import React from 'react';
import ButtonCard from './ButtonCard';
import './cardViewList.scss'
import ImageStar from './ImageStar';


const CardViewList = (props) => {
    const { id, title, price, url, itemNumber } = props.item;

    return (
        <>
            <div className="card-image-wrap">
                <img src={url} alt={itemNumber} height="150" width="150" />
            </div>
            <div className="card-description--view-list">
                <div className='star-wrap--view-list'>
                    <ImageStar id={id} />
                </div>
                <h3 className="title-card--view-list">{title}</h3>
                <div>
                    <p className="item-number-card">{itemNumber}</p>
                    <span className="price-card">${price}</span>
                </div>
                <ButtonCard className={'products-view-list'} id={id} title={title} />
            </div>
        </>
    )
}

export default CardViewList;