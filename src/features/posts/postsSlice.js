import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {
        loadPosts: (state, action) => {
            action.payload.forEach(post => {
                const { title, url, id } = post;
                console.log(title, url, id)

                state.posts[id] = {title, url, id}
            });
        }
    }
})

export const postsReducer = postsSlice.reducer;