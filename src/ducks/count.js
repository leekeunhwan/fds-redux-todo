// 액션: 상태를 어떻게 변형시킬지 나타내는 *객체*.
// `type`이라는 속성을 가지고 있어야 한다.

// 액션 타입

const INCR = 'fds-redux-todos/count/INCR';
const ZERO = 'fds-redux-todos/count/ZERO';

// 액션 생산자

export function incr(amount) {
  return {
    type: INCR,
    amount,
  };
}

export function zero() {
  return {
    type: ZERO,
  };
}

// 리듀서
// 상태와 액션을 인수로 받아서, 다음 상태를 반환하는 *순수 함수*
// 리듀서의 매개변수에 상태의 기본값을 줘야하는 것이 관례이다.
export default function count(state = 0, action) {
  switch (action.type) {
    case INCR:
      return state + action.amount;
    case ZERO:
      return 0;
    default:
      return state;
  }
}
