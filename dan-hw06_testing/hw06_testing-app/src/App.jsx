import './App.scss';
import React, { createContext, useEffect, useState } from 'react';
import CardsList from './pages/Products/CardsList';
import { Routes, Route, Navigate } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import { useDispatch } from 'react-redux';
import { setCartList, setFavList } from './store/actions';
import { addAllItems } from './store/thunk';
import OrderInfo from './pages/OrderInfo/OrderInfo';
import Layout from './components/Layout/Layout';


export const ViewContext = createContext();

const UserProvider = ({ children }) => {
  const [view, setView] = useState('module');
  const handleChangeView = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };
  return (
    <ViewContext.Provider value={{ view, handleChangeView }}>
      {children}
    </ViewContext.Provider>
  )
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let starList = JSON.parse(localStorage.getItem('starList'));
    let cartList = JSON.parse(localStorage.getItem('cartList'));

    if (Array.isArray(starList) && starList.length > 0) {
      dispatch(setFavList(starList));
    }
    if (Array.isArray(cartList) && cartList.length > 0) {
      dispatch(setCartList(cartList));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(addAllItems());
  }, [dispatch]);

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to='products' />} />
            <Route path='products' element={<CardsList />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='cart' element={<Cart />}>
            </Route>
            <Route path='/cart/order' element={<OrderInfo />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
