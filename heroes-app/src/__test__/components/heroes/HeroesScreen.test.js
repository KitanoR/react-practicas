import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';


describe('Pruebas del componente <HeroesScreen/>', () => {
    const historyMock = {
        length: 10, 
        goBack: jest.fn(),
        push: jest.fn(),
    }
    
    test('Debe de mostrarse el componente redirect si no hay argumentos en la url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroesScreen history={historyMock} />
            </MemoryRouter>
        )
        expect(wrapper.find('Redirect').exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar un heroe si el parametro exisite ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeID" component={HeroesScreen} />
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBeTruthy();
    })
    test('Retornar a la pantalla anterior con push ', () => {
        const historyMock = {
            length: 1, 
            goBack: jest.fn(),
            push: jest.fn(),
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeID" 
                    component={() => <HeroesScreen history={historyMock}/>} 
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(wrapper.find('.row').exists()).toBeTruthy();
        expect(historyMock.push).toHaveBeenCalledTimes(1);
        expect(historyMock.goBack).not.toHaveBeenCalled();
    })

    test('Retornar a la pantalla anterior con GoBack ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeID" 
                    component={() => <HeroesScreen history={historyMock}/>} 
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(wrapper.find('.row').exists()).toBeTruthy();
        expect(historyMock.goBack).toHaveBeenCalledTimes(1);
        expect(historyMock.push).not.toHaveBeenCalled();
    })

    test('Debe de llamar el redirect si no existe ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spideasdfsdr']}>
                <Route 
                    path="/hero/:heroeID" 
                    component={() => <HeroesScreen history={historyMock}/>} 
                />
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('');
    })
})

// http://localhost:3000/hero/marvel-spider