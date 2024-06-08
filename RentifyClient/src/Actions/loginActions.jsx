/* Action Creators */
export const loginUser = (userId, userName) => ({
  type: 'LOGIN_USER',
  payload: { userId, userName }
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});