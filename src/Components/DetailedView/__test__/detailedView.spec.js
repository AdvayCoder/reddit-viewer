import DetailedView from "../DetailedView";
import { Provider } from "react-redux";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { store } from '../../../app/store'
import { mount, shallow, configure } from "enzyme";

configure({ adapter: new Adapter})

describe('DetailedView', () => {
    it('renders properly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <DetailedView />
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    // it('shows data correctly', () => {
    //     const wrapper = mount(
    //         <Provider store={store}>
    //             <DetailedView />
    //         </Provider>
    //     )

        
    // })
})