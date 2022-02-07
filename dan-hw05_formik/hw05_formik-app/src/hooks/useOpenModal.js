import { useDispatch, useSelector } from 'react-redux';
import { changeCartList } from '../store/thunk';
import getDataModal from './../api/getDataModal';

const useOpenModal = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartList);
    const isOpenedModal = useSelector(state => state.isOpenedModal);

    const addToCart = (id, text) => {
        setModalStatus();
        const newDataModal = getDataModal(cartList, id, text);
        dispatch({ type: 'SET_DATA_MODAL', payload: { ...newDataModal } });
    }

    const setModalStatus = () => {
        dispatch({ type: 'SET_IS_OPENED_MODAL', payload: !isOpenedModal });
    }

    const handleClickModalOk = (id) => {
        setModalStatus();
        dispatch(changeCartList(id));
    }
    return { addToCart, setModalStatus, handleClickModalOk }
}

export default useOpenModal;