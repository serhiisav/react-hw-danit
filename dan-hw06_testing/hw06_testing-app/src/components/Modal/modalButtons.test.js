import userEvent from '@testing-library/user-event'
import { cleanup, render, screen } from '@testing-library/react';
import ModalButtons from './ModalButtons';
import { Provider } from 'react-redux';
import store from '../../store/store';
import reducer from '../../store/reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom/extend-expect';



describe('<ModalButtons/> component', () => {
    afterEach(() => cleanup());

    it('should render', () => {
        render(<Provider store={store}><ModalButtons></ModalButtons></Provider>);
        screen.getByRole('button', { name: /ok/i });
        screen.getByRole('button', { name: /cancel/i });
    });

    it('renders correctly', () => {
        const { container } = render(<Provider store={store}><ModalButtons></ModalButtons></Provider>);
        expect(container).toMatchSnapshot();
    });

    it('should trigger onClick functions button "OK"', () => {
        const initialState = {
            isOpenedModal: false,
            cartList: [],
            dataModal: {
                id: 2,
                btnActionOk: 'OK',
                btnActionCancel: 'CANCEL',
            }
        }
        const store = createStore(
            reducer,
            initialState,
            applyMiddleware(thunk));

        render(
            <Provider store={store}>
                <ModalButtons></ModalButtons>
            </Provider>
        );

        userEvent.click(screen.getByRole('button', { name: /ok/i }));

        expect(store.getState()).toEqual({
            isOpenedModal: true,
            cartList: [2],
            dataModal: {
                id: 2,
                btnActionOk: 'OK',
                btnActionCancel: 'CANCEL'
            }
        });
    });

    it('should trigger onClick functions button "CANCEL"', () => {
        const initialState = {
            isOpenedModal: true,
            dataModal: {
                btnActionOk: 'OK',
                btnActionCancel: 'CANCEL',
            }
        }
        const store = createStore(reducer, initialState);

        render(
            <Provider store={store}>
                <ModalButtons></ModalButtons>
            </Provider>
        );

        userEvent.click(screen.getByRole('button', { name: /cancel/i }));
        expect(store.getState().isOpenedModal).toBe(false);
    });
});