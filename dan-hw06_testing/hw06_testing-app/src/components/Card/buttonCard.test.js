
import { cleanup, render, screen } from '@testing-library/react';
import ButtonCard from './ButtonCard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../../store/store';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import reducer from '../../store/reducer';


describe('<ButtonCard/> component', () => {
    afterEach(() => cleanup());

    it('should render button "Add to Cart"', () => {
        const testProps = {
            id: 4,
            title: 'test title',
            className: 'products'
        }

        render(
            <Provider store={store}>
                <ButtonCard className={testProps.className} id={testProps.id} title={testProps.title} />
            </Provider>, { wrapper: MemoryRouter });
        screen.getByRole('button', { name: /add to cart/i });
    })

    it('should render button "View Cart"', () => {
        const testProps = {
            id: 5,
            title: 'test title',
            className: 'products'
        }
        const initialState = {
            cartList: [5]
        }
        const store = createStore(
            reducer,
            initialState,
        );

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <ButtonCard className={testProps.className} id={testProps.id} title={testProps.title} />
                </Provider>
            </MemoryRouter>)

        screen.getByRole('button', { name: /view cart/i });


    })

    it('should trigger onClick functions button "Add to Cart"', () => {
        const testProps = {
            id: 7,
            title: 'test title',
            className: 'products'
        }
        const initialState = {
            isOpenedModal: false,
            cartList: [],
        }
        const store = createStore(
            reducer,
            initialState,
        );

        render(
            <Provider store={store}>
                <ButtonCard className={testProps.className} id={testProps.id} title={testProps.title} />
            </Provider>, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /add to cart/i });

        userEvent.click(button);

        expect(store.getState()).toEqual(
            {
                isOpenedModal: true,
                cartList: [],
                dataModal: {
                    id: 7,
                    header: 'Add to cart',
                    text: 'Add test title to cart?',
                    backgroundColor: '#4598cc',
                    btnActionOk: 'OK',
                    btnActionCancel: 'CANCEL',
                    closeButton: true
                }
            })
    });

})