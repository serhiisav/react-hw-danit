import React, { useEffect, useState } from "react";
import { getItemsFiltered } from "../../api/getItems";
import './favorites.scss';
import getNameBtnCart from './../../api/getNameBtnCart';
import useOpenModal from "../../hooks/useOpenModal";
import Modal from './../../components/Modal/Modal';
import { Link } from "react-router-dom";


const Favorites = ({ favoriteList, cartList, changeFavorite, changeCartList }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [itemsFavoriteList, setItemsFavoriteList] = useState([]);
    const { isOpened, addToCart, setModalStatus, dataModal, handleClickModalOk } = useOpenModal(cartList, changeCartList);

    useEffect(() => {
        getItemsFiltered(favoriteList)
            .then(data => {
                setItemsFavoriteList(data);
                setIsLoading(false);
            })
    }, [favoriteList]);

    return (
        <section className="section-favorite">
            {isLoading ? <div className="lds-dual-ring"></div> :
                <>
                    {isOpened && <Modal dataModal={dataModal} isOpened={isOpened} setModalStatus={setModalStatus} handleClickModalOk={handleClickModalOk} cartList={cartList} />}
                    {itemsFavoriteList.length > 0 ?
                        <div className="container">
                            <div className="favorite-wrap">
                                <ul className="favorite-list">
                                    {itemsFavoriteList.map((item =>
                                    (<li key={item.id} id="item.id" className="favorite-item">
                                        <div className="favorite-image-wrap">
                                            <img src={item.url} alt={item.itemNumber} height="150" width="150" />
                                        </div>
                                        <div className="favorite-description">
                                            <span onClick={() => changeFavorite(item.id)} className="favorite-close">✕</span>
                                            <h3 className="favorite-title-card">{item.title}</h3>
                                            <div>
                                                <p className="item-number-card">{item.itemNumber}</p>
                                                <span className="price-card">${item.price}</span>
                                            </div>
                                            <Link className="favorite-btnView-cart" to={cartList.includes(item.id) ? '/cart' : ''}>
                                                <button onClick={() => {
                                                    addToCart(item.id, item.title)
                                                }} className="favorite-btn-cart">{getNameBtnCart(cartList, item.id)}</button>
                                            </Link>

                                        </div>
                                    </li>)
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                        : <div>
                            <p className="favorites-message">Oops! Your favorites list is empty</p> <Link className="home-btn" to='/'>home page</Link>
                        </div>
                    }
                </>
            }
        </section>
    )
}

export default Favorites;