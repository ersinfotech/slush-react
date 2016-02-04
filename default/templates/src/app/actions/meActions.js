export const PARSE_ME = 'PARSE_ME';
export const LOAD_ME = 'LOAD_ME';
export const SIGNOUT = 'SIGNOUT';

export const parseMe = () => ({
  type: PARSE_ME,
});

export const loadMe = (data) => ({
  type: LOAD_ME,
  data,
});

export const signout = () => ({
  type: SIGNOUT,
});
