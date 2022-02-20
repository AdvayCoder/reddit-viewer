import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../store';
import App from '../App';
import { store } from '../store';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

describe('<App />', () => {

  it('renders properly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot();
  })

  // it('calls componentDidMount', () => {
  //   jest.spyOn(App.prototype, 'componentDidMount')
  //   const wrapper = shallow(<App />)
  //   expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
  // })
});