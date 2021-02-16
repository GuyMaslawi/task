const init = {
  isLogin: false
};

export const loginReducer = (state = init, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};
