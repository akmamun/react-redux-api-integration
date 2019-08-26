
const TodoList = (state, action)=> ({
        ...state,
        todos: action.data.map(data => ({
            title:data.title,
            body:data.body
        }))
}); 

export default function reducer(state = {}, action) {
const reducers = {
    'TODO_LIST': TodoList
}
if (action.type in reducers) {
    return (reducers[action.type](state, action));
} else {
    console.warn(`No reducer for action type "${action.type}"`);
    return state;
}};
    