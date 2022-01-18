import React, { Component } from "react";

export default class Modal extends Component {

    render() {
        const { isOpened, onClick, header, text, closeButton, actions, backgroundColor } = this.props;
        return (
            <div className={isOpened ? "modal-wrap active" : "modal-wrap"} onClick={onClick}>
                <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: backgroundColor }}>
                    <div className="modal-header">
                        <p>{header}</p>

                        {closeButton && <span onClick={onClick} className="modal-close">✕</span>}
                    </div>
                    <p className="modal-text">{text}</p>
                    <div className="modal-buttons-wrap">{actions()} </div>
                </div>
            </div>
        )
    }
}