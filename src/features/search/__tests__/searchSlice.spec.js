import { setSearch, clearSearch, searchReducer } from "../searchSlice";
// import { Reducer } from "redux-testkit";

//using github copilot, this is why the test is different from postsSlice.spec.js

const state = '';

describe('store/search/reducers', () => {

    it('should return initial state', () => {
        expect(searchReducer(undefined, {})).toEqual('');
    })

    it('should set search', () => {
        const action = setSearch('test');
        const newState = searchReducer(state, action);
        expect(newState).toEqual('test');
    })

    it('should clear search', () => {
        const action = clearSearch();
        const newState = searchReducer(state, action);
        expect(newState).toEqual('');
    })
})