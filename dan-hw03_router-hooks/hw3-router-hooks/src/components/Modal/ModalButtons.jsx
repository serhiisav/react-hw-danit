import React from "react";

const ModalButtons = ({ dataModal, setModalStatus, handleClickModalOk }) => {
    const { btnActionOk, btnActionCancel } = dataModal;

    return (
        <>
            <button onClick={handleClickModalOk} id='btnModalOk' className='btnModal' type='button'>{btnActionOk}</button>
            <button onClick={setModalStatus} id='btnModalCancel' className='btnModal' type='button'>{btnActionCancel}</button>
        </>
    )
}

export default ModalButtons;