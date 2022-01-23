import './App.scss';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import CardsList from './components/CardsList/CardsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
      itemsCartList: [],
      itemsCartLiset: []
    }
  }

  changeFavoriteList = (id) => {
    if (this.state.favoriteList.includes(id)) {
      let newFavoriteList = this.state.favoriteList.filter(el => el !== id);
      this.setState({ favoriteList: newFavoriteList });
    } else {
      this.setState({ favoriteList: [...this.state.favoriteList, id] })
    }
  }

  changeCartList = (id) => {
    if (this.state.itemsCartList.includes(id)) {
      let newItemsCartList = this.state.itemsCartList.filter(el => el !== id);
      this.setState({ itemsCartList: newItemsCartList });
    } else {
      this.setState({ itemsCartList: [...this.state.itemsCartList, id] })
    }
  }

  componentDidMount() {
    let starList = JSON.parse(localStorage.getItem('starList'));
    let cartList = JSON.parse(localStorage.getItem('cartList'));

    if (starList) {
      this.setState({ favoriteList: starList })
    }
    if (cartList) {
      this.setState({ itemsCartList: cartList })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('starList', JSON.stringify(this.state.favoriteList));
    localStorage.setItem('cartList', JSON.stringify(this.state.itemsCartList));

    // console.log(parseInt(localStorage.getItem('favoriteCount'), 10));
  }

  render() {

    return (
      <>
        <Header favoriteCount={this.state.favoriteList.length} cartCount={this.state.itemsCartList.length} />
        <CardsList listCount={this.state} onChangeFavorite={this.changeFavoriteList} onChangeCart={this.changeCartList} />
      </>
    );
  }
}

export default App;
