import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Modal from './Modal';
import reducer from '../../store/reducer';
import { createStore } from 'redux';

import '@testing-library/jest-dom/extend-expect';

describe('<Modal/> component', () => {

    it('should be displayed', () => {
        const initialState = {
            isOpenedModal: true,
            dataModal: {
                header: 'Modal',
                closeButton: true,
                text: 'Test text Modal',
                btnActionOk: 'OK',
                backgroundColor: '#b46c7b',
                btnActionCancel: 'CANCEL'
            }
        }
        const store = createStore(
            reducer,
            initialState,
        );

        const { container } = render(
            <Provider store={store}>
                <Modal />
            </Provider>);

        expect(container.firstChild).toHaveClass('modal-wrap active', { exact: true });
        expect(container.firstChild).toMatchSnapshot();
    })

    it('should not be displayed', () => {
        const initialState = {
            isOpenedModal: false,
            dataModal: {
                header: 'Modal',
                closeButton: true,
                text: 'Test text Modal',
                btnActionOk: 'OK',
                backgroundColor: '#b46c7b',
                btnActionCancel: 'CANCEL'
            }
        }
        const store = createStore(
            reducer,
            initialState,
        );

        const { container } = render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );
        expect(container.firstChild).toHaveClass('modal-wrap', { exact: true });
        expect(container.firstChild).toMatchSnapshot();
    })

})