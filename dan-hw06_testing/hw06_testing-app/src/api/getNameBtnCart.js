const getNameBtnCart = (cartList, id) => {
    let nameBtnAddCart;
    if (cartList.includes(id)) {
        nameBtnAddCart = 'View Cart';
    } else {
        nameBtnAddCart = 'Add to Cart';
    };
    return nameBtnAddCart;
}

export default getNameBtnCart;