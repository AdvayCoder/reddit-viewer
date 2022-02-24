import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: ''
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: (state, action) => {
            state.search = '';
        }
    }
})

//reducer
export const searchReducer = searchSlice.reducer;

//actions
export const { setSearch, clearSearch } = searchSlice.actions;

//selectors, fix this!!
export const selectSearch = state => state.search.search;