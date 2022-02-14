import React from "react";
import './modal.scss';
import ModalButtons from "./ModalButtons";
import useOpenModal from "../../hooks/useOpenModal";
import { useSelector } from "react-redux";


function Modal() {
    const isOpenedModal = useSelector(state => state.isOpenedModal);
    const dataModal = useSelector(state => state.dataModal);

    const { setModalStatus } = useOpenModal();
    const { header, closeButton, text, backgroundColor } = dataModal;

    return (
        <div className={isOpenedModal ? "modal-wrap active" : "modal-wrap"} onClick={setModalStatus}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: backgroundColor }}>
                <div className="modal-header">
                    <p>{header}</p>
                    {closeButton && <span onClick={setModalStatus} className="modal-close">✕</span>}
                </div>
                <p className="modal-text">{text}</p>
                <div className="modal-buttons-wrap">{
                    <ModalButtons />
                }
                </div>
            </div>
        </div>
    )
}

export default Modal;