import {
    ADD_TODO,
    TODO_LIST,
    TODO
} from "../constants/ActionTypes";

const initialState = {
    title: "",
    body: ""
  };
  
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                title: action.title,
                body: action.body
            };

        case TODO_LIST:
            return {
                // ...state,
                todos: action.data.map(data => ({
                    ...data
                }))
            };
        case TODO:
            return {
                // ...state,
                title: action.title,
                body: action.body
            };    
        default:
            return state
    }
}

// const TodoList = (state, action)=> ({
//         ...state,
//         todos: action.data.map(data => ({
//             title:data.title,
//             body:data.body
//         }))
// }); 


// const TodoAdd = (state, action)=> ( 
//   {
//     ...state, 
//     title:action.title,
//     body:action.body
//   }
// )


// export default function reducer(state = {}, action) {
// const reducers = {
//     TODO_LIST: TodoList,
//     ADD_TODO :TodoAdd
// }
// if (action.type in reducers) {
//     return (reducers[action.type](state, action));
// } else {
//     console.warn(`No reducer for action type "${action.type}"`);
//     return state;
// }};