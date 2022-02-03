import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getNameBtnCart from "../../api/getNameBtnCart";
import useOpenModal from "../../hooks/useOpenModal";

const ButtonCard = ({ id, title, className }) => {
    const cartList = useSelector(state => state.cartList);
    const { addToCart } = useOpenModal();
    const navigate = useNavigate();

    const handleClickBtnCart = () => {
        if (cartList.includes(id)) {
            navigate('/cart');
        } else {
            addToCart(id, title);
        }
    }

    return (
        <button onClick={() => handleClickBtnCart()} className={`${className}-btn-cart`}>{getNameBtnCart(cartList, id)}</button>
    );
}

export default ButtonCard;