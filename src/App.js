import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { loadTodos } from './actions/loadTodos';
import './App.css'; 


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
        this.props.dispatch(loadTodos()); 
  }
  render() {
    const data = this.props.todos;
    return (
      <div>
        
        {data.map((d,i)=>(
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
  (state) => {
      return {
          todos: state.todos || []
      }
  },
  null
)(App);