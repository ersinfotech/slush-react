export default function me(state = {}, action) {
  if (action.type === '@@redux/INIT') {
    return JSON.parse(localStorage.me);
  } else {
    return state;
  }
}
