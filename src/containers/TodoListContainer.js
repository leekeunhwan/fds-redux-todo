import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
  return {
    // 이 state는 Redux state
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps, // redux state로부터 prop을 만들어내는 함수
  mapDispatchToProps // dispatch로부터 prop을 만들어내는 함수
)(TodoList);
