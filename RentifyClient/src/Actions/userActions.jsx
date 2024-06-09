/*
 *  An action creator is a function that creates and returns an action object. 
 *  We typically use these so we don't have to write the action object by hand every time:
 */
  export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user
  });
  
  export const logoutUser = (user) => ({
    type: 'LOGOUT_USER',
    payload: user
  });