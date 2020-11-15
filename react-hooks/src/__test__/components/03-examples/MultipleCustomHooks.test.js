import React  from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetch } from '../../../hooks/useFetch';
import { useCouter } from '../../../hooks/useCouter';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCouter');


describe('Pruebas en <MultipleCustomHooks />', () => {
    useCouter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })
    test('Debe mostrarse correctamente ', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Caye',
                    quote: 'Hola mundo'
                }
            ],
            loading: false,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Caye');
    });
});
