import { combineReducers, createStore } from 'redux';
import count from './ducks/count';
import todos from './ducks/todos';

// const initialState = {
//   count: 0,
//   todos: [],
// }; // 관례
// redux store는 초기 상태를 만들 때
// state에 undefined,
// action에 빈 객체를 넣어 리듀서를 호출한다.
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCR:
//     case ZERO:
//       return {
//         ...state,
//         count: count(state.count, action)
//       }
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: todos(state.todos, action)
//       }
//     default: // 관례
//       return state;
//   }
// }

// 작은 리듀서 여러 개를 만든 다음
// combineReducers를 사용해 합칠 수 있다.
const rootReducer = combineReducers({
  todos,
  count,
});

// 스토어
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});
