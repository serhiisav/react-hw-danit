import React, { Component } from "react";

export default class Button extends Component {
    render() {
        const { buttonId, text, backgroundColor, onClick } = this.props
        return (
            <button id={buttonId} className="btn-openModal" style={{ backgroundColor: backgroundColor }} onClick={(e) => onClick(e)}>
                {text}
            </button>
        )
    }
}