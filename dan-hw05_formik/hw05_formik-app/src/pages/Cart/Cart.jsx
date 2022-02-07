import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useOpenModal from "../../hooks/useOpenModal";
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsCartList, setIsActiveOrderForm, setTotalsOrder } from "../../store/actions";
import FormCart from "../../components/FormCart/FormCart";
import NumFormatOrderSum from "../../components/NumberFormat/NumFormatOrderSum";


const Cart = () => {
    const dispatch = useDispatch();

    const isOpenedModal = useSelector(state => state.isOpenedModal);
    const products = useSelector(state => state.products);
    const cartList = useSelector(state => state.cartList);
    const isLoading = useSelector(state => state.isLoading);
    const itemsCartList = useSelector(state => state.itemsCartList);
    const error = useSelector(state => state.error);
    const isActiveOrderForm = useSelector(state => state.isActiveOrderForm);
    const totalsOrder = useSelector(state => state.totalsOrder);
    const { addToCart } = useOpenModal();

    useEffect(() => {
        let filteredCartList = products.filter(item => cartList.includes(item.id))
        dispatch(addItemsCartList(filteredCartList))
    }, [dispatch, cartList, products]);

    const handleGoToCheckout = () => {
        dispatch(setIsActiveOrderForm(true));
    }

    useEffect(() => {
        dispatch(setIsActiveOrderForm(false));
    }, [dispatch]);

    useEffect(() => {
        let orderSum = itemsCartList.reduce((sum, { price }) => {
            return sum + parseFloat(price, 10);
        }, 0);
        dispatch(setTotalsOrder(orderSum));

    }, [itemsCartList]);

    return (
        <section className="section-cart">
            {isLoading ? <div className="lds-dual-ring"></div> :
                error ? <p className="page-message">{error}</p> :
                    <>
                        {isOpenedModal && <Modal />}
                        {cartList.length === 0 ?
                            <div>
                                <p className="page-message">Oops! Your cart is empty</p> <Link className="home-btn" to='/'>home page</Link>
                            </div> :
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
                                            </div>
                                        </li>)
                                        ))
                                        }
                                    </ul>
                                    <div className="cart-totals-wrap">
                                        <p className="cart-totals">Order Totals: <NumFormatOrderSum totalsOrder={totalsOrder} />
                                        </p>
                                    </div>
                                    {!isActiveOrderForm ? <div className="goToCheckout-wrap">
                                        <button className={`goToCheckout-btn-cart`} onClick={() => handleGoToCheckout()}>Go to checkout</button>
                                    </div> : <FormCart />}
                                </div>
                            </div>
                        }
                    </>
            }
        </section>
    )
}

export default Cart;