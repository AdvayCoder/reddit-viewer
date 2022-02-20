import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomePage from '../HomePage';
import { store } from '../../../app/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() })

describe('<HomePage />', () => {

    it('renders properly', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <HomePage />
        </Provider>
    )

    expect(wrapper).toMatchSnapshot();
    })

    // it('calls componentDidMount', () => {
    //     jest.spyOn(App.prototype, 'componentDidMount')
    //     const wrapper = shallow(<App />)
    //     expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    // })
});