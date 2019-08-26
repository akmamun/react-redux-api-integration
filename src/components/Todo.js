import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { todoList, addTodo } from '../actions';
import axios from "axios";
class Todo extends Component {
    state = {
        title : "",
        body : "",
        todos: []
    }

  componentDidMount() {
        this.props.dispatch(todoList()); 
  }
  onChance = (e) => {
    /* Because we named the inputs to match their corresponding values in state, it's
         super easy to update the state  */
   this.setState({[e.target.name] : e.target.value}); 
 }
 onSubmit = (e) => {
    e.preventDefault() //prevent load   
    // get our form data out of state
    const {title, body} = this.state;
    // define state variable for use in return
    //and store in state value
     this.props.dispatch(addTodo({ title: title.value, body: body.value}))
      .then(this.setState({   //clear inputs after submit 
        title: "",
        body: ""
      }))
       .then(response => this.props.history.push('/')); 
  }

  render() {
    const {todos} = this.props;
    const {title, body} = this.state;
    return (
      <div>
        
       <div>
        {todos.map((d,i)=>(
            <Fragment key={i}>
            <h1 >{d.title}</h1>
            <h2 >{d.body}</h2>
            </Fragment>
            )
          )} 
       </div>
       <div>
       <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>
                Todo Title :    </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  className="form-control"
                  placeholder="Add Todo"
                  onChange={this.onChance}
                  required
                />
           
            </div>
            <div className="form-group">
              <label> Description :  </label>
                <textarea
                  type="text"
                  name="body"
                  className="form-control"
                  placeholder="Description"
                  value={body}
                  onChange={this.onChance}
                  rows="4"
                  required  />
         
            </div>
            <button
              type="submit"
              className="btn btn-md btn-primary float-right">
              Add Todo
            </button>
            </form>
       </div>
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
)(Todo);