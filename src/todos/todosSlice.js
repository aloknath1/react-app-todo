import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
 name: 'todos',
 initialState: [],
 reducers: {
    addTodos : (state, action) => {
     
         const newTodo = { title: '',
            completed: false
         };
         state.push(newTodo);
        
    }
 }
});

export const {addTodos}= todosSlice.actions;
export default todosSlice.reducer;