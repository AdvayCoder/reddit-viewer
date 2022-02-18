import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../store';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

describe('App Component', () => {

  it('returns jsx', () => {
    const wrapper = shallow(
      <App />
    )

    expect(wrapper).toMatchSnapshot();
  })
  
});