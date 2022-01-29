import axios from 'axios';

export const getItems = () => {
    return axios.get('items.json');
}

export const getItemsFiltered = (listId) => {
    return axios.get('items.json')
        .then(response => {
            return response.data.filter(item => listId.includes(item.id))
        });
}
