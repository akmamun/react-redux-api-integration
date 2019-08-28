import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, todoList} from '../actions';

class AddTodo extends Component {
    state = {
        title: this.props.title || "",
        body:  this.props.body || ""
    };

    onChance = (e) => {
        /* Because we named the inputs to match their corresponding values in state, it's
             super easy to update the state  */
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = (e) => {
        e.preventDefault(); //prevent load
        // get our form data out of state
        const {title, body} = this.state;
        // define state variable for use in return
        //and store in state value
        this.props.dispatch(addTodo({title: title, body: body}))
            .then(this.setState({   //clear inputs after submit
                title: "",
                body: ""
            }))
            .then(res => this.props.dispatch(todoList()))
    };

    render() {
        const {title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>
                            Todo Title : </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            className="form-control"
                            placeholder="Add Todo"
                            onChange={this.onChance}
                            required/>
                    </div>
                    <div className="form-group">
                        <label> Description : </label>
                        <textarea
                            type="text"
                            name="body"
                            className="form-control"
                            placeholder="Description"
                            value={body}
                            onChange={this.onChance}
                            rows="4"
                            required/>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-md btn-primary float-right">
                        Add Todo
                    </button>
                </form>
            </div>
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
)(AddTodo);