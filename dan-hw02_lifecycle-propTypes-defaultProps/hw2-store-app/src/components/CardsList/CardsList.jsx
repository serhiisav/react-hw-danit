import React, { Component } from "react";
import PropTypes from 'prop-types';
import Card from "./Card";
import './cardList.scss';
import Modal from "../Modal/Modal";

class CardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [],
            currentBtnCart: null,
            isOpened: false,
            dataModal: {
                header: 'Modal',
                closeButton: true,
                text: 'Are you sure you want to delete it',
                btnActionOk: 'OK',
                backgroundColor: '#b46c7b',
                btnActionCancel: 'CANCEL',
            },
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts = () => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ productsList: data })
                localStorage.setItem('products', JSON.stringify(this.state.productsList))
            })
            .catch(error => console.log(error));
    }

    getDataModal = (id, text) => {
        this.setState({
            currentBtnCart: id,
            isOpened: !this.state.isOpened,
        });
        if (this.props.listCount.itemsCartList.includes(id)) {
            this.setState({
                dataModal: {
                    ...this.state.dataModal,
                    header: 'Delete from cart',
                    text: `Delete ${text} from cart?`,
                    backgroundColor: '#b46c7b',
                    btnActionOk: 'Delete',
                    btnActionCancel: 'View Cart'
                }
            })
        } else {
            this.setState({
                dataModal: {
                    ...this.state.dataModal,
                    header: 'Add to cart',
                    text: `Add ${text} to cart?`,
                    backgroundColor: '#4598cc',
                    btnActionOk: 'OK',
                    btnActionCancel: 'CANCEL',
                }
            })
        }
    }

    setModalStatus = () => {
        this.setState({ isOpened: !this.state.isOpened });
    }

    handleClickModalOk = () => {
        this.setModalStatus();
        this.props.onChangeCart(this.state.currentBtnCart);
    }

    getModalButtons = () => {
        const { dataModal: { btnActionOk, btnActionCancel } } = this.state;
        return (
            <>
                <button onClick={this.handleClickModalOk} id='btnModalOk' className='btnModal' type='button'>{btnActionOk}</button>
                <button onClick={this.setModalStatus} id='btnModalCancel' className='btnModal' type='button'>{btnActionCancel}</button>
            </>
        )
    }

    render() {
        const { isOpened, dataModal: { header, closeButton, text, backgroundColor } } = this.state
        return (
            <main className="main-page">

                <section className="section-cards">
                    <div className="container">
                        <div className="section-cards-wrap">
                            <Modal header={header} text={text} closeButton={closeButton} isOpened={isOpened} setModalStatus={this.setModalStatus} actions={this.getModalButtons} backgroundColor={backgroundColor} />
                            <ul className="cards-list">
                                {
                                    this.state.productsList.map(card =>
                                    (<li key={card.id} id={card.id} className="card-item">
                                        <Card productsList={card}
                                            appProps={this.props}
                                            onClickAddCart={this.getDataModal}
                                        />
                                    </li>)
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

CardsList.propTypes = {
    listCount: PropTypes.object,
    onChangeFavorite: PropTypes.func,
    onChangeCart: PropTypes.func
}

export default CardsList;