import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProductMock from '../../__mocks__/productMock';
import Product from '../../components/Product';

describe('<Product/>', () => {
    test('Render de componente products', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });
    test('Comprobar el boton de comprar', () => {
        const handleAddToCart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product 
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        )

        wrapper.find('button').simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1);
    });
});