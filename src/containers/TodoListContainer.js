import { connect } from 'react-redux';
import axios from 'axios';
import TodoList from '../components/TodoList';
import { fetchTodos, deleteTodo } from '../ducks/todos';

function mapStateToProps(state) {
  return {
    // 이 state는 Redux state
    todos: state.todos.items,
    loading: state.todos.loading,
    errorMsg: state.todos.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchTodos());
    },
    onDelete: id => {
      dispatch(deleteTodo(id));
    },
  };
}

export default connect(
  mapStateToProps, // redux state로부터 prop을 만들어내는 함수
  mapDispatchToProps // dispatch로부터 prop을 만들어내는 함수
)(TodoList);
