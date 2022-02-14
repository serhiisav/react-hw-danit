import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import NumFormatOrderSum from "../../components/NumberFormat/NumFormatOrderSum";
import { removeCartList, removeItemsCartList } from "../../store/actions";
import './OrderInfo.scss'

const OrderInfo = () => {
    const dispatch = useDispatch();
    const orderInfo = useSelector(state => state.orderInfo);
    const { firstName, lastName, age, address, phone, totalSum, orderList } = orderInfo;

    const navigate = useNavigate();

    useEffect(() => {
        if (!Object.values(orderInfo).length) {
            navigate('/');
        } else {
            console.group('Order Info');
            console.log(orderInfo);
            console.groupEnd()
            dispatch(removeCartList());
            localStorage.removeItem('cartList');
        }
        return () => {
            dispatch(removeItemsCartList());
        };
    }, []);

    return (
        <section className="section-order">
            <div className="container">
                <div className="order-wrap">
                    <h3 className="order-title">Order Info</h3>
                    <ul className="order-list">
                        <li>First Name: <span className="order-info">{firstName}</span></li>
                        <li>Last Name: <span className="order-info">{lastName}</span></li>
                        <li>Age: <span className="order-info">{age}</span></li>
                        <li>Address: <span className="order-info">{address}</span></li>
                        <li>Phone: <span className="order-info">{phone}</span></li>
                    </ul>
                    <h3 className="order-title">Order List</h3>
                    <ul className="order-list">
                        {orderList && orderList.map(item => {
                            return <li key={item.id} className="order-item">
                                <p>{item.itemNumber}</p>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </li>
                        })}
                    </ul>
                    <h3 className="order-title">Order TotalSum: <NumFormatOrderSum totalsOrder={totalSum} />
                    </h3>
                    <div className="home-btn-wrap">
                        <Link className="home-btn" replace={true} to='/'>home page</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderInfo;