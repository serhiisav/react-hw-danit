import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import './cardList.scss';
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAllItems } from "../../store/thunk";

function CardsList() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const isOpenedModal = useSelector(state => state.isOpenedModal);
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(addAllItems());
    }, [dispatch]);

    return (
        <section className="section-cards">
            {isLoading ? <div className="lds-dual-ring"></div> :
                error ? <p className="page-message">{error}</p> :
                    <>
                        {isOpenedModal && <Modal />}
                        <div className="container">
                            <div className="section-cards-wrap">
                                <ul className="cards-list">
                                    {products.map(card =>
                                    (<li key={card.id} id={card.id} className="card-item">
                                        <Card item={card} />
                                    </li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}

export default CardsList;