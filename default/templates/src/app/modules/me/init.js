import {loop, Effects} from 'redux-loop';

export default () => {
  return loop(
    JSON.parse(localStorage.me)
  ,
    Effects.none()
  );
}
