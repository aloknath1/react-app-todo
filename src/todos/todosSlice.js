import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   posts: []
};

export const todosSlice = createSlice({
 name: 'todos',
 initialState,
 reducers: {
    addTodos : (state, action) => {     
       state.posts =  [...state.posts, action.payload];   
       return state;     
    },

     updateTodos : (state, action) => {     
       state.posts =  [...state.posts, action.payload];   
       return state;     
       
        //posts.push(action.payload);  
         //state.posts =  [...state.posts, action.payload];   
      // return state;     
    }
 }
});

export const {addTodos, updateTodos}= todosSlice.actions;
export default todosSlice.reducer;