import { postsReducer } from '../postsSlice'
import { Reducer } from 'redux-testkit';
import { uuid } from 'uuidv4';

const initialState = {
    posts: {}
}

describe('postsSlice', () => {
    it('returns the initial state', () => {
        expect(postsReducer(undefined, {})).toEqual(initialState);
    })

    it('should not affect state', () => {
        Reducer(postsReducer).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    })

    it('should write fetched posts to state', () => {
        const id = uuid();
        const posts = {[id]: {title: 'test post', url: 'some url', id} }

        const payload = [{title: 'test post', url: 'some url', id}]
        const action = {type: 'posts/loadPosts', payload};

        Reducer(postsReducer).expect(action).toReturnState({posts});
        //! incorrect return expected
    })
})