import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../ducks/todos';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: body => {
      dispatch(addTodo(body));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
