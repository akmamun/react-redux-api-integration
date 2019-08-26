import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { todoList } from '../actions';


class Todo extends Component {
 state = {
      todos: []
    }

  componentDidMount() {
        this.props.dispatch(todoList()); 
  }
  
  render() {
    const {todos} = this.props;
    return (
      <div>
        
        {todos.map((d,i)=>(
          <Fragment key={i}>
          <h1 >{d.title}</h1>
          <h2 >{d.body}</h2>
          </Fragment>
          )
        )} 
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