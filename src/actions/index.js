import axios from 'axios';

import {ADD_TODO, TODO_LIST} from "../constants/ActionTypes"

export const todoList = () => (
    dispatch => (
        axios.get("http://127.0.0.1:5000/api/v1/todos")
            .then(data => {
                dispatch({
                    type: TODO_LIST,
                    ...data
                })
            }).catch(error => {
            throw(error);
        })
    )
);
export const addTodo = data => (
    dispatch => (
        axios.post("http://127.0.0.1:5000/api/v1/todos", data)
            .then(response => {
                dispatch({
                    type: ADD_TODO
                });
            })
    )
);

