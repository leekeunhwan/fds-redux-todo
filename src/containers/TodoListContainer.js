import { connect } from 'react-redux';
import axios from 'axios';
import TodoList from '../components/TodoList';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
} from '../ducks/todos';

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
    onMount: async function() {
      dispatch(fetchTodosRequest());
      try {
        const res = await axios.get('https://bog-morning.glitch.me/todos');
        dispatch(fetchTodosSuccess(res.data));
      } catch (e) {
        dispatch(fetchTodosFailure(e.message));
      }
    },
  };
}

export default connect(
  mapStateToProps, // redux state로부터 prop을 만들어내는 함수
  mapDispatchToProps // dispatch로부터 prop을 만들어내는 함수
)(TodoList);
