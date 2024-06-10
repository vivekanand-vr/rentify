const initialState = {
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        isLoggedIn: true,
        ...action.payload // Copying all other User attributes in state
      }
    case 'LOGOUT_USER':
      return {
        isLoggedIn: false, // On logout keeping only one attribute
      }; 
    default:
      return state;
  }
};

export default userReducer;
