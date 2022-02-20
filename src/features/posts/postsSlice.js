import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (urlToFetch) => {
        const res = await fetch(urlToFetch);
        const json = await res.json();
        console.log(json);
        const postsArr = [];
        json.data.children.forEach(post => {
            if(post.data.link_flair_text === 'Mod post') {
                return;
            }

            const splitLink = post.data.permalink.split('/');
            postsArr.push({
                title: post.data.title,
                resourceUrl: post.data.url_overridden_by_dest,
                author: post.data.author,
                link: splitLink[5]
            })

            console.log('hi2')

        })

        console.log('postArr', postsArr)

        return postsArr;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            action.payload.forEach(post => {
                const { title, resourceUrl, author, link } = post;

                state.posts.push({title, resourceUrl, author, link});
            });
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

//reducer
export const postsReducer = postsSlice.reducer;

//selectors
export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectHasError = state => state.posts.hasError;