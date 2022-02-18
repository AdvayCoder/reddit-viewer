import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomePage from '../HomePage';

configure({ adapter: new Adapter() })

describe('<HomePage />', () => {

    it('renders properly', () => {
    const wrapper = shallow(
        <HomePage />
    )

    expect(wrapper).toMatchSnapshot();
    })

    // it('calls componentDidMount', () => {
    //     jest.spyOn(App.prototype, 'componentDidMount')
    //     const wrapper = shallow(<App />)
    //     expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    // })
});