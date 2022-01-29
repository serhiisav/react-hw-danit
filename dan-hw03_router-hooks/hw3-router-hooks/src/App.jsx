import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import CardsList from './pages/Products/CardsList';

function App() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [cartList, setCartList] = useState([]);

  const changeFavoriteList = (id) => {
    if (favoriteList.includes(id)) {
      let newFavoriteList = favoriteList.filter(el => el !== id);
      setFavoriteList(newFavoriteList);
    } else {
      setFavoriteList([...favoriteList, id])
    }
  }

  const changeCartList = (id) => {
    if (cartList.includes(id)) {
      let newCartList = cartList.filter(el => el !== id);
      setCartList(newCartList);
    } else {
      setCartList([...cartList, id]);
    }
  }

  useEffect(() => {
    let starList = JSON.parse(localStorage.getItem('starList'));
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    if (starList) {
      setFavoriteList(starList);
    }
    if (cartList) {
      setCartList(cartList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('starList', JSON.stringify(favoriteList));
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [favoriteList, cartList]);

  return (
    <>
      <Header favoriteCount={favoriteList.length} cartCount={cartList.length} />
      <main className="main-page">
        <Routes>
          <Route path='/' element={<Navigate to='products' />}></Route>
          <Route path='products' element={
            <CardsList
              favoriteList={favoriteList}
              cartList={cartList}
              changeFavorite={changeFavoriteList}
              changeCartList={changeCartList}
            />}
          />
          <Route path='favorites' element={
            <Favorites
              favoriteList={favoriteList}
              cartList={cartList}
              changeFavorite={changeFavoriteList}
              changeCartList={changeCartList}
            />}
          />
          <Route path='cart' element={
            <Cart
              cartList={cartList}
              changeCartList={changeCartList}
            />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
