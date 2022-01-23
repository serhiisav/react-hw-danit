import React, { Component } from "react";
import './modal.scss';
import PropTypes from 'prop-types';


export default class Modal extends Component {

    render() {
        const { isOpened, setModalStatus, header, text, closeButton, actions, backgroundColor } = this.props;
        return (
            <div className={isOpened ? "modal-wrap active" : "modal-wrap"} onClick={setModalStatus}>
                <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: backgroundColor }}>
                    <div className="modal-header">
                        <p>{header}</p>
                        {closeButton && <span onClick={setModalStatus} className="modal-close">✕</span>}
                    </div>
                    <p className="modal-text">{text}</p>
                    <div className="modal-buttons-wrap">{actions()} </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    closeButton: PropTypes.bool,
    isOpened: PropTypes.bool,
    setModalStatus: PropTypes.func,
    actions: PropTypes.func,
    backgroundColor: PropTypes.string
}

Modal.defaultProps = {
    header: 'Modal',
    closeButton: true,
    text: 'Are you sure you want to delete it',
    btnActionOk: 'OK',
    backgroundColor: '#b46c7b',
    btnActionCancel: 'CANCEL',
}