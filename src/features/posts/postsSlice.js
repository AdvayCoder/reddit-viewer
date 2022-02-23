import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (urlToFetch) => {
        const res = await fetch(urlToFetch);
        const json = await res.json();

        console.log(json)

        const postsArr = [];
        json.data.children.forEach(post => {
            if(post.data.link_flair_text === 'Mod post') { //excludes mod non-post posts
                return;
            }
            
            postsArr.push({
                title: post.data.title,
                resourceUrl: post.data.url_overridden_by_dest,
                author: post.data.author,
                id: post.data.id
            })

        })

        return postsArr;
    }
)

export const loadSinglePost = createAsyncThunk(
    'posts/loadSinglePost',
    async (urlToFetch) => {
        let json;
        try {
            const res = await fetch(urlToFetch);
            json = await res.json();
        } catch (error) {
            return null;
        }

        const postDataObj = {
            main: {
                title: json[0].data.children[0].data.title,
                resourceUrl: json[0].data.children[0].data.url,
                author: json[0].data.children[0].data.author,
            },
            comments: []
        };


        json[1].data.children.forEach((comment, index) => {
            if(index === 0) { //excludes mod bot comment
                return;
            }

            // console.log(comment.data.replies.data.children[1].data)

            // let replies = comment.data.replies.data.children.slice(0, 10);

            postDataObj.comments.push({
                body: comment.data.body,
                author: comment.data.author,

                //part of the replies feature, it isn't working.  Maybe could fix it later.  Could be because replies (above) is undefined in some cases.  Study a sample
                //post at this link: https://www.reddit.com/r/ProgrammerHumor/comments/svz8r7.json, see the post here: https://www.reddit.com/r/ProgrammerHumor/comments/svz8r7/
                // replies: replies && replies.map(reply => {
                //     return {
                //         reply: reply.data.body,
                //         author: reply.data.author
                //     }
                // })
            })
        })

        return postDataObj;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        singlePost: {},
        isLoading: false,
        hasError: false,
        singlePostError: false
    },
    reducers: {},
    extraReducers: {
        //all posts
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            action.payload.forEach(post => {
                const { title, resourceUrl, author, id } = post;
                state.posts[id] = {title, resourceUrl, author, id};
            });
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },

        //single post
        [loadSinglePost.pending]: (state, action) => {
            state.isLoading = true;
            state.singlePostError = false;
        },
        [loadSinglePost.fulfilled]: (state, action) => {
            state.singlePost = [];

            const { main, comments } = action.payload;
            state.singlePost.main = main;
            state.singlePost.comments = comments;
            
            state.isLoading = false;
            state.singlePostError = false;
        },
        [loadSinglePost.rejected]: (state, action) => {
            console.log('error')
            state.isLoading = false;
            state.singlePostError = true;
        }
    }
})

//reducer
export const postsReducer = postsSlice.reducer;

//selectors
export const selectPosts = state => state.posts.posts;
export const selectSinglePost = state => state.posts.singlePost;
export const selectIsLoading = state => state.posts.isLoading;
export const selectHasError = state => state.posts.hasError;
export const selectSinglePostError = state => state.posts.singlePostError;