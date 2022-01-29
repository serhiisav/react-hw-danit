import { useState } from 'react';
import getDataModal from './../api/getDataModal';

const useOpenModal = (cartList, changeCartList) => {
    const [currentBtnCart, setCurrentBtnCart] = useState(null);
    const [isOpened, setIsOpened] = useState(false);
    const [dataModal, setDataModal] = useState({});

    const addToCart = (id, text) => {
        setIsOpened(!isOpened);
        setCurrentBtnCart(id);
        const newDataModal = getDataModal(cartList, id, text);
        setDataModal({ ...newDataModal });
    }
    const setModalStatus = () => {
        setIsOpened(!isOpened);
    }

    const handleClickModalOk = () => {
        setModalStatus();
        changeCartList(currentBtnCart);
    }
    return { isOpened, dataModal, addToCart, setModalStatus, handleClickModalOk }
}

export default useOpenModal;