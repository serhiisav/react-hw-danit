import './App.scss';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import CardsList from './pages/Products/CardsList';
import { Routes, Route, Navigate } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import { useDispatch } from 'react-redux';
import { setCartList, setFavList } from './store/actions';
import { addAllItems } from './store/thunk';


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
      <Header />
      <main className="main-page">
        <Routes>
          <Route path='/' element={<Navigate to='products' />}></Route>
          <Route path='products' element={<CardsList />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
