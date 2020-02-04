import { connect } from 'react-redux'
import { todoActions } from "../../../redux/actions/todoActions";
import Footer from "../components/Footer";

const getCompletedNum = (todos) => {
  return todos.filter((todo) => {
    return todo.completed === true;
  }).length;
}

const getTodoInfo = (todos) => {
  const todoNum = todos.filter((todoEvent) => {
    return todoEvent.completed === false;
  }).length;
  if(!todoNum){
    return "All work was done!"
  }else{
    return (todoNum === 1 ? "1 item" : todoNum + " items") + " left to be done.";
  }
}

const mapStateToProps = state => ({
  info: getTodoInfo(state.todoList),
  length: state.todoList.length,
  completedNum: getCompletedNum(state.todoList),
})

const mapDispatchToProps = dispatch => ({
  toggleAllTodo: (value) => dispatch(todoActions.toggleAllTodo(value)),
  deleteCompleted: () => dispatch(todoActions.deleteCompleted()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)