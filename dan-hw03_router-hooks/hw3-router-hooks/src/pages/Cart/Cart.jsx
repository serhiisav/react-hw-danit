import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItemsFiltered } from "../../api/getItems";
import Modal from "../../components/Modal/Modal";
import useOpenModal from "../../hooks/useOpenModal";
import './cart.scss';



const Cart = ({ cartList, changeCartList }) => {
    const [itemsCartList, setItemsCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isOpened, addToCart, setModalStatus, dataModal, handleClickModalOk } = useOpenModal(cartList, changeCartList);
    const [totalsOrder, setTotalsOrder] = useState([])

    useEffect(() => {
        getItemsFiltered(cartList)
            .then(data => {
                setItemsCartList(data);
                setIsLoading(false);
            })
    }, [cartList]);

    useEffect(() => {
        let orderSum = itemsCartList.reduce((sum, { price }) => {
            return sum + parseFloat(price, 10);
        }, 0);
        setTotalsOrder(orderSum);
    }, [itemsCartList]);

    return (
        <section className="section-cart">
            {isLoading ? <div className="lds-dual-ring"></div> :
                <>
                    {isOpened &&
                        <Modal
                            dataModal={dataModal}
                            isOpened={isOpened}
                            setModalStatus={setModalStatus}
                            handleClickModalOk={handleClickModalOk} />}
                    {itemsCartList.length > 0 ?
                        <div className="container">
                            <div className="cart-wrap">
                                <ul className="cart-list">
                                    {itemsCartList.map((item =>
                                    (<li key={item.id} id="item.id" className="cart-item">
                                        <div className="cart-image-wrap">
                                            <img src={item.url} alt={item.itemNumber} height="150" width="150" />
                                        </div>
                                        <div className="cart-description">
                                            <span onClick={() => addToCart(item.id, item.title)} className="cart-close">✕</span>
                                            <h3 className="cart-title-card">{item.title}</h3>
                                            <div>
                                                <p className="item-number-card">{item.itemNumber}</p>
                                                <span className="price-card">${item.price}</span>
                                            </div>
                                            {/* <button className="cart-btn-cart" onClick={() => addToCart(item.id, item.title)}>Delete</button> */}
                                        </div>
                                    </li>)
                                    ))
                                    }
                                </ul>
                                <div className="cart-totals-wrap">
                                    <p className="cart-totals">Order Totals: ${totalsOrder}</p>
                                </div>
                            </div>
                        </div>
                        : <div>
                            <p className="cart-message">Oops! Your cart is empty</p> <Link className="home-btn" to='/'>home page</Link>
                        </div>
                    }
                </>
            }
        </section>
    )
}

export default Cart;