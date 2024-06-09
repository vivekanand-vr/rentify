const initialState = {
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
