import React from "react";
import { useSelector } from "react-redux";
import useOpenModal from "../../hooks/useOpenModal";

const ModalButtons = () => {
    const { btnActionOk, btnActionCancel, id } = useSelector(state => state.dataModal);
    const { setModalStatus, handleClickModalOk } = useOpenModal();

    return (
        <>
            <button onClick={() => handleClickModalOk(id)} id='btnModalOk' className='btnModal' type='button'>{btnActionOk}</button>
            <button onClick={setModalStatus} id='btnModalCancel' className='btnModal' type='button'>{btnActionCancel}</button>
        </>
    )
}

export default ModalButtons;