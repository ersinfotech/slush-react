import {loop, Effects} from 'redux-loop';

export default (isCollapsed) => {
  return loop({
    isCollapsed,
  },
    Effects.none()
  );
}
