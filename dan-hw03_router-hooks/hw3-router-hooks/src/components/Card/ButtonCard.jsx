import { Link } from "react-router-dom";
import getNameBtnCart from "../../api/getNameBtnCart";

const ButtonCard = ({ cartList, id, title, onClickAddCart, className }) => {
    return (
        cartList.includes(id) ?
            <Link className={`${className}-btn-cart btnView`} to='/cart'>{getNameBtnCart(cartList, id)}</Link> :
            <button onClick={() => onClickAddCart(id, title)} className={`${className}-btn-cart`}>{getNameBtnCart(cartList, id)}</button>
    );
}

export default ButtonCard;