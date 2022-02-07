const getDataModal = (cartList, id, text) => {
    if (cartList.includes(id)) {
        return {
            id,
            header: 'Delete from cart',
            text: `Delete ${text} from cart?`,
            backgroundColor: '#b46c7b',
            btnActionOk: 'Delete',
            btnActionCancel: 'Cancel',
            closeButton: true,
        }
    } else {
        return {
            id,
            header: 'Add to cart',
            text: `Add ${text} to cart?`,
            backgroundColor: '#4598cc',
            btnActionOk: 'OK',
            btnActionCancel: 'CANCEL',
            closeButton: true,
        }
    }
}

export default getDataModal;