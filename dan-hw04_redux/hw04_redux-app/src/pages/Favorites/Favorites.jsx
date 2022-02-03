import React, { useEffect } from "react";
import './favorites.scss';
import Modal from './../../components/Modal/Modal';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ButtonCard from "../../components/Card/ButtonCard";
import { changeFavoritesList } from "../../store/thunk";
import { addItemsFavList } from "../../store/actions";


const Favorites = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const favoritesList = useSelector(state => state.favoritesList);
    const isOpenedModal = useSelector(state => state.isOpenedModal);
    const isLoading = useSelector(state => state.isLoading);
    const itemsFavoriteList = useSelector(state => state.itemsFavoriteList);
    const error = useSelector(state => state.error)

    const handleChangeFavList = (id) => {
        dispatch(changeFavoritesList(id))
    }

    useEffect(() => {
        let filteredFavList = products.filter(item => favoritesList.includes(item.id))
        dispatch(addItemsFavList(filteredFavList));
    }, [dispatch, favoritesList, products]);

    return (
        <section className="section-favorite">
            {isLoading ? <div className="lds-dual-ring"></div> :
                error ? <p className="page-message">{error}</p> :
                    <>
                        {isOpenedModal && <Modal />}
                        {favoritesList.length === 0 ?
                            <div>
                                <p className="page-message">Oops! Your favorites list is empty</p> <Link className="home-btn" to='/'>home page</Link>
                            </div> :
                            <div className="container">
                                <div className="favorite-wrap">
                                    <ul className="favorite-list">
                                        {itemsFavoriteList.map((item =>
                                        (<li key={item.id} id="item.id" className="favorite-item">
                                            <div className="favorite-image-wrap">
                                                <img src={item.url} alt={item.itemNumber} height="150" width="150" />
                                            </div>
                                            <div className="favorite-description">
                                                <span onClick={() => handleChangeFavList(item.id)} className="favorite-close">✕</span>
                                                <h3 className="favorite-title-card">{item.title}</h3>
                                                <div>
                                                    <p className="item-number-card">{item.itemNumber}</p>
                                                    <span className="price-card">${item.price}</span>
                                                </div>
                                                <ButtonCard className={'favorite'} id={item.id} title={item.title} />
                                            </div>
                                        </li>)
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                    </>
            }
        </section>
    )
}

export default Favorites;