import React, { useContext, useEffect } from "react";
import CardViewModule from "../../components/Card/CardViewModule";
import './cardList.scss';
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAllItems } from "../../store/thunk";
import ToggleBtn from "../../components/ToggleButton/ToggleButton";
import { ViewContext } from './../../App';
import CardViewList from './../../components/Card/CardViewList';

function CardsList() {
    const dispatch = useDispatch();

    const { view } = useContext(ViewContext)

    const products = useSelector(state => state.products);
    const isOpenedModal = useSelector(state => state.isOpenedModal);
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(addAllItems());
    }, [dispatch]);

    const getComponent = (card) => {
        if (view === 'module') {
            return (<CardViewModule item={card} />)
        } else if (view === 'list') {
            return (<CardViewList item={card} />)
        }
    }

    return (
        <section className="section-cards">
            {isLoading ? <div className="lds-dual-ring"></div> :
                error ? <p className="page-message">{error}</p> :
                    <>
                        {isOpenedModal && <Modal />}
                        <div className="container">
                            <div className="section-cards-wrap">
                                <div className="toggle-btn-wrapp">
                                    <ToggleBtn />
                                </div>
                                <ul className={`cards-list--view-${view}`}>
                                    {products.map(card =>
                                    (<li key={card.id} id={card.id} className={`card-item--view-${view}`}>
                                        {getComponent(card)}
                                    </li>))}

                                </ul>
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}

export default CardsList;