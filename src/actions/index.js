import axios from 'axios'; 

export const todoList = () => (
     dispatch => (
        axios.get("http://127.0.0.1:5000/api/v1/todos")
        .then(response => { 
            dispatch({
                type: 'TODO_LIST',
                data:response.data
            });
        })
     )
);
export const addTodo = data => (
    dispatch => (
       axios.post("http://127.0.0.1:5000/api/v1/todos")
       .then(response => { 
           dispatch({
               type: 'TODO_ADD',
               data:data
           });
       })
    )
);