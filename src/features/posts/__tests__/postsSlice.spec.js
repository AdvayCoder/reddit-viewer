import { postsReducer, loadPosts, selectPosts, selectIsLoading, selectHasError } from '../postsSlice'
import { Reducer, Selector } from 'redux-testkit';

const initialState = {
    posts: {},
    singlePost: {},
    isLoading: false,
    hasError: false
}

describe('store/posts/reducers', () => {
    it('returns the initial state', () => {
        expect(postsReducer(undefined, {})).toEqual(initialState);
    })

    it('should not affect state', () => {
        Reducer(postsReducer).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    })
})

//broken tests

//reducers

// it('should write fetched posts to state', () => {
//     const posts = {
//         posts: [
//             {
//                 subreddit: "ProgrammerHumor",
//                 title: "Okay, let's end this Tabs vs Space debate once and for all",
//                 thumbnail: "https://b.thumbs.redditmedia.com/Gydli9Uivwh8EYqOomTqeOfHC6zEAvFoag0PogUDVBY.jpg",
//                 url_overridden_by_dest: "https://i.redd.it/vqoy43k9pki81.jpg",
//                 author: "Pretend_Education_37",
//                 permalink: "/r/ProgrammerHumor/comments/svz8r7/end_this_war"
//             },
//             {
//                 subreddit: "ProgrammerHumor",
//                 title: "Sorry if it's too specific but this hurts my eyes :(",
//                 thumbnail: "https://b.thumbs.redditmedia.com/MsTPSXI4htBVNfy1A7NDag2MQrhHYvtNxWrwPwwsiLw.jpg",
//                 url_overridden_by_dest: "https://i.redd.it/6zzegd1d7mi81.gif",
//                 author: "The_Sad_Memer",
//                 permalink: "/r/ProgrammerHumor/comments/svz8r7/sorry_if_it's_too_specific_but_this_hurts_my_eyes/"
//             }
//         ],
//         isLoading: false,
//         hasError: false
//     }

//     Reducer(postsReducer).expect(loadPosts).toReturnState(posts);
// })

//selectors

// describe('store/posts/selectors', () => {

//     describe('selectPosts', () => {
//         it('return initial state when state is empty', () => {
//             const posts = [];
//             Selector(selectPosts).expect(initialState).toReturn([])
//         })
//     })

// })