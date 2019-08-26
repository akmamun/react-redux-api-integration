
const TodoDetails = (state, action)=> ({
        ...state,
        todos: action.data.map(data => ({
            title:data.title,
            body:data.body
        }))
}); 

export default function reducer(state = {}, action) {
const reducers = {
    'TODOS_LOAD': TodoDetails
}
if (action.type in reducers) {
    return (reducers[action.type](state, action));
} else {
    console.warn(`No reducer for action type "${action.type}"`);
    return state;
}};
    