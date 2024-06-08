const initialState = {
  isLoggedIn: false,
  userId: null,
  userName: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
        userName: action.payload.userName
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        userName: null
      };
    default:
      return state;
  }
};

export default loginReducer;
