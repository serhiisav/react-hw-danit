import React, { useEffect, useState } from "react";
import './cardList.scss';
import Modal from "../../components/Modal/Modal";
import { getItems } from "../../api/getItems";
import useOpenModal from "../../hooks/useOpenModal";
import Card from "../../components/Card/Card";

function CardsList(props) {
    const [itemsList, setItemsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItems()
            .then(response => {
                setItemsList(response.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(itemsList));
    // }, [itemsList]);

    const { isOpened, dataModal, addToCart, setModalStatus, handleClickModalOk } = useOpenModal(props.cartList, props.changeCartList);

    return (
        <section className="section-cards">
            {isLoading ? <div className="lds-dual-ring"></div> :
                <>
                    {isOpened && <Modal
                        dataModal={dataModal}
                        isOpened={isOpened}
                        setModalStatus={setModalStatus}
                        handleClickModalOk={handleClickModalOk}

                    />}
                    <div className="container">
                        <div className="section-cards-wrap">
                            <ul className="cards-list">
                                {itemsList.map(card =>
                                (<li key={card.id} id={card.id} className="card-item">
                                    <Card itemsList={card}
                                        appProps={props}
                                        onClickAddCart={addToCart} />
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