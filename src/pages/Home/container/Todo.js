import React from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../../../redux/actions/todoActions';
import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'
import InfoFooter from '../container/InfoFooter'

class Todo extends React.Component {
  componentDidMount(){
    this.props.getTodoList();
  }

  render() {
    return (
      <div id="right">
        <AddTodo addNewTodoEvent={this.props.addNewTodoEvent}/>
        <TodoList 
          todos={this.props.todoList} 
          deleteTodo={this.props.deleteTodo}
          handleChange={this.props.updateTodo}
        />
        <InfoFooter />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList
})

const mapDispatchToProps = dispatch => ({
  getTodoList: () => dispatch(todoActions.getTodoList()),
  addTodo: (newTodo) => dispatch(todoActions.addTodo(newTodo)),
  deleteTodo: (tid) => dispatch(todoActions.deleteTodo(tid)),
  updateTodo: (tid, key, value) => dispatch(todoActions.updateTodo(tid, key, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);