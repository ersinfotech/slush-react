export const SIGNOUT = 'SIGNOUT';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

export const signOut = () => ({
  type: SIGNOUT,
});

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS
});
