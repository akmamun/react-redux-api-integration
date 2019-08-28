import axios from 'axios';

import {
    ADD_TODO,
    TODO,
    TODO_LIST
} from "../constants/ActionTypes"

export const todoList = () => (
    dispatch => (
        axios.get("http://127.0.0.1:5000/api/v1/todos")
        .then(response => {
            dispatch({
                type: TODO_LIST,
                data: response.data
            })
        }).catch(error => {
            throw (error);
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
        }).catch(error => {
            throw (error);
        })
    )
);
export const todo = id => (
    dispatch => (
        axios.get("http://127.0.0.1:5000/api/v1/todos/" + id)
        .then(response => {
            dispatch({
                type: TODO,
                data: response.data
            });
        }).catch(error => {
            throw (error);
        })
    )

)