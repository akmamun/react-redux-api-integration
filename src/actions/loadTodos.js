import axios from 'axios'; 

export function loadTodos() {
    return (dispatch) => {
        // dispatch({
        //     type: 'TODOS_LOADING'
        // });

        axios.get("http://127.0.0.1:5000/api/v1/todos")
        .then(res => { 
            dispatch({
                type: 'TODOS_LOAD',
                data:res.data
            });

        });
    }
}