import React from "react";
import './modal.scss';
import PropTypes from 'prop-types';
import ModalButtons from "./ModalButtons";


function Modal({ dataModal, isOpened, setModalStatus, handleClickModalOk }) {
    const { header, closeButton, text, backgroundColor } = dataModal;
    return (
        <div className={isOpened ? "modal-wrap active" : "modal-wrap"} onClick={setModalStatus}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: backgroundColor }}>
                <div className="modal-header">
                    <p>{header}</p>
                    {closeButton && <span onClick={setModalStatus} className="modal-close">✕</span>}
                </div>
                <p className="modal-text">{text}</p>
                <div className="modal-buttons-wrap">{<ModalButtons handleClickModalOk={handleClickModalOk} setModalStatus={setModalStatus} dataModal={dataModal} />} </div>
            </div>
        </div>
    )
}


Modal.propTypes = {
    dataModal: PropTypes.object,
    isOpened: PropTypes.bool,
    setModalStatus: PropTypes.func,
    handleClickModalOk: PropTypes.func
}

Modal.defaultProps = {
    dataModal: {
        header: 'Modal',
        closeButton: true,
        text: 'Are you sure you want to delete it',
        btnActionOk: 'OK',
        backgroundColor: '#b46c7b',
        btnActionCancel: 'CANCEL',
    }
}

export default Modal;