import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoList} from '../actions';
import {Link} from "react-router-dom";
import {DELETE_TODO, EDIT_TODO} from "../constants/ActionTypes";
 
import Modal from './modal/Modal';

class TodoList extends Component {
    state = {
        todos: [],
        show:false
    };

    componentDidMount() {
        this.props.dispatch(todoList());
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };


    onSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        const {todos} = this.props;
        return (
            <>
            <div>
                {todos.map((d, i) => (
                        <div key={i}>
                            {/*<h1>{d._id}</h1>*/}
                            <h1>{d.title} <Link to={`todo/${d._id}`} onClick={this.onChange}>Edit </Link></h1>
                            <h2>{d.body}</h2>
                            <button onClick={this.toggleModal}>Edit </button>
                            <Modal show={this.state.showModal}
                        closeModal={this.toggleModal}>
                        <h4> here is modal data </h4> 
                    </Modal>
                        </div>
                    )
                )}
            </div>
             
            </>
        
        );
    }
}

export default connect(
    state => {
        return {
            todos: state.todos || []
        }
    },
    null
)(TodoList);